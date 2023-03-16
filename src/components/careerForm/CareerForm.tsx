import React, { useState } from "react";
import "./careerForm.css";
import CustomSelect from "../input/CustomSelect";
import CustomFile from "../input/CustomFile";
import CustomImageFile from "../input/CustomImageFile";
import { countryList } from "../../countryList";
import toast, { Toaster } from "react-hot-toast";
import axios, { Axios, AxiosError } from "axios";

interface CareerType {
  photo: File | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  country: string | null;
  cv: File | null;
  civility: string | null;
  targetPosition: string | null;
  contractType: string | null;
  searchFunction: string | null;
  motivation: File | null;
}

const fields = {
  photo: " à la photo",
  firstName: " au prénom",
  lastName: " au nom",
  email: " à l'adresse mail",
  phone: " au numéro de téléphone",
  country: " au pays",
  cv: " au cv",
  civility: " à la civilité",
  targetPosition: " au poste visé",
  contractType: " au type de contrat recherché",
  searchFunction: " à la fonction recherché",
  motivation: " à la lettre de motivation",
};

const CareerForm = () => {
  const [condition, setCondition] = useState(false);
  const [career, setCareer] = useState<CareerType>({
    photo: null,
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    civility: null,
    country: null,
    cv: null,
    motivation: null,
    targetPosition: null,
    contractType: null,
    searchFunction: null,
  });

  const init = () => {
    setCareer({
      photo: null,
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
      civility: null,
      country: null,
      cv: null,
      motivation: null,
      targetPosition: null,
      contractType: null,
      searchFunction: null,
    });
  };

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    for (const key in career) {
      if (Object.prototype.hasOwnProperty.call(career, key)) {
        //@ts-ignore
        const value = career[key];
        if (!value) {
          return toast.error(
            //@ts-ignore
            "Veuillez remplir le champ appartenant  " + fields[key]
          );
        }
        if (
          key === "email" &&
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
        ) {
          return toast.error("Votre adresse mail est invalide");
        }
      }
    }

    const form = new FormData();

    form.append("photo", career.photo as File);
    form.append("firstname", career.firstName as string);
    form.append("lastname", career.lastName as string);
    form.append("email", career.email as string);
    form.append("phone", career.phone as string);
    form.append("civility", career.civility as string);
    form.append("country", career.country as string);
    form.append("cv", career.cv as File);
    form.append("motivation", career.motivation as File);
    form.append("targetPosition", career.targetPosition as string);
    form.append("contractType", career.contractType as string);
    form.append("jobSearch", career.searchFunction as string);

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:3000/career",
      data: form,
    };

    axios(config)
      .then(function () {
        init();
        return toast.success("Votre demande a été envoyé avec succès");
      })
      .catch((e: AxiosError) => {
        //@ts-ignore
        const error = e.response?.data.errors;
        console.log(e);
        if (e.response?.status === 400) {
          return toast.error(error);
        }
        return toast.error(
          "Une erreur est survenue lors de l'envoi de vos données, veuillez réessayer."
        );
      });
  };

  return (
    <div className="careerFormContainer">
      <Toaster />
      <form encType="multipart/form-data" className="form-contact">
        <div className="form-contact-content">
          <h2>Déposer une candidature spontanée</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            debitis atque veniam esse repellat cupiditate. Deleniti adipisci
            ipsam voluptatem accusamus.
          </p>
          <form className="form-contact-form">
            <div className="form-group-x2">
              <div className="form-group-content">
                <input
                  type="text"
                  placeholder="Veuillez saisir votre nom *"
                  onChange={(e) =>
                    setCareer({ ...career, lastName: e.target.value })
                  }
                  value={career.lastName || ""}
                />
                <input
                  type="text"
                  placeholder="Veuillez saisir votre prénom *"
                  onChange={(e) =>
                    setCareer({ ...career, firstName: e.target.value })
                  }
                  value={career.firstName || ""}
                />
                <input
                  type="text"
                  placeholder="Veuillez saisir adresse mail *"
                  onChange={(e) =>
                    setCareer({ ...career, email: e.target.value })
                  }
                  value={career.email || ""}
                />
                <input
                  type="text"
                  placeholder="Veuillez saisir numéro de téléphone *"
                  onChange={(e) =>
                    setCareer({ ...career, phone: e.target.value })
                  }
                  value={career.phone || ""}
                />
              </div>
              <div className="form-group-img">
                <CustomImageFile
                  getValue={(picture: File) =>
                    setCareer({ ...career, photo: picture })
                  }
                />
              </div>
            </div>

            <CustomSelect
              data={genre}
              getValue={(civility: string) =>
                setCareer({ ...career, civility: civility })
              }
              placeholder="Civilité"
              labelExtractor={(item: { name: string }) => item.name}
              keyExtractor={(item: { name: number }) => item.name}
              valueExtractor={(item: { name: number }) => item.name}
            />

            <CustomSelect
              data={countryList}
              getValue={(country: string) =>
                setCareer({ ...career, country: country })
              }
              placeholder="Pays"
              labelExtractor={(item: { name: string }) => item.name}
              keyExtractor={(item: { name: number }) => item.name}
              valueExtractor={(item: { name: number }) => item.name}
            />
            <CustomFile
              placeholder="Insérez votre CV"
              getValue={(cv: File) => setCareer({ ...career, cv: cv })}
            />
            <CustomFile
              placeholder="Insérez une lettre de motivation"
              getValue={(motivation: File) =>
                setCareer({ ...career, motivation: motivation })
              }
            />
            <CustomSelect
              data={data}
              getValue={(post: string) =>
                setCareer({ ...career, targetPosition: post })
              }
              placeholder="Poste visé"
              labelExtractor={(item: { name: string }) => item.name}
              keyExtractor={(item: { name: number }) => item.name}
              valueExtractor={(item: { name: number }) => item.name}
            />
            <CustomSelect
              data={data}
              getValue={(contract: string) =>
                setCareer({ ...career, contractType: contract })
              }
              placeholder="Type de contrat"
              labelExtractor={(item: { name: string }) => item.name}
              keyExtractor={(item: { name: number }) => item.name}
              valueExtractor={(item: { name: number }) => item.name}
            />
            <CustomSelect
              data={data}
              getValue={(func: string) =>
                setCareer({ ...career, searchFunction: func })
              }
              placeholder="Fonction recherché"
              labelExtractor={(item: { name: string }) => item.name}
              keyExtractor={(item: { name: number }) => item.name}
              valueExtractor={(item: { name: number }) => item.name}
            />

            <button onClick={submit}>Valider</button>
          </form>
        </div>
      </form>
    </div>
  );
};

const genre = [
  {
    id: 1,
    name: "Madame",
  },
  {
    id: 2,
    name: "Mademoiselle",
  },
  {
    id: 3,
    name: "Monsieur",
  },
];
const data = [
  {
    id: 1,
    name: "Congo",
  },
  {
    id: 2,
    name: "Gabon",
  },
  {
    id: 3,
    name: "Cameroun",
  },
];

export default CareerForm;

/**
 * Champs
 * nom
 * prenom
 * email
 * telephone
 * pays
 * cv
 * poste visé
 * type de contrat
 * fonction rechercher
 *
 *
 *
 */
