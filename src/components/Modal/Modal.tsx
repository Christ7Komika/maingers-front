import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsTelephoneFill } from "react-icons/bs";
import "./modal.css";
import CustomSelect from "../input/CustomSelect";
import toast, { Toaster } from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { host } from "../../host";
import { countryList } from "../../countryList";
type Props = {
  isOpen: boolean;
  handleOpen: Function;
};

interface ProjectType {
  lastname: null | string;
  firstname: null | string;
  society: null | string;
  codePostal: null | string;
  subject: null | string;
  email: null | string;
  phone: null | string;
  func: null | string;
  country: null | string;
}

const fields = {
  lastname: " au nom",
  firstname: " au prénom",
  society: " au nom de la société",
  codePostal: " au code postal de la société",
  subject: " à l'objet de votre message",
  email: " à l'adresse mail",
  phone: " au numéro de téléphone",
  country: " au pays",
  func: " à votre fonction",
};

const Modal = ({ isOpen, handleOpen }: Props) => {
  const html = document.querySelector("html") as HTMLElement;
  const [initCustom, setInitCustom] = useState(false);
  const [dial, setDial] = useState("");
  const [project, setProject] = useState<ProjectType>({
    lastname: null,
    firstname: null,
    email: null,
    phone: null,
    society: null,
    codePostal: null,
    func: null,
    country: null,
    subject: null,
  });

  const init = () => {
    setInitCustom(true);
    setProject({
      lastname: null,
      firstname: null,
      email: null,
      phone: null,
      society: null,
      codePostal: null,
      func: null,
      country: null,
      subject: null,
    });
  };

  useEffect(() => {
    if (project.country) {
      countryList.map((item) => {
        if (item.name === project.country) {
          setDial(item.dial_code);
          return;
        }
      });
    }
  }, [project.country]);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target.className === "modal-all-container") {
        handleOpen(false);
      }
    });
  }, []);
  if (isOpen) {
    html.style.overflowY = "hidden";
  } else {
    html.style.overflowY = "scroll";
    return <></>;
  }

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    for (const key in project) {
      if (Object.prototype.hasOwnProperty.call(project, key)) {
        //@ts-ignore
        const value = project[key];

        if (key === "file" && !value) {
          continue;
        }
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

        if (key === "codePostal" && value.length !== 5) {
          return toast.error("Votre code postal est invalide");
        }
      }
    }

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: host + "/project",
      data: project,
    };

    axios(config)
      .then(function () {
        init();

        toast.success("Votre demande a été envoyé avec succès");
        setTimeout(() => {
          handleOpen(false);
        }, 1000);
      })
      .catch((e: AxiosError) => {
        //@ts-ignore
        const error = e.response?.data.errors;
        if (e.response?.status === 400) {
          return toast.error(error);
        }
        return toast.error(
          "Une erreur est survenue lors de l'envoi de vos données, veuillez réessayer."
        );
      });
  };

  return (
    <div className="modal-normal">
      <Toaster />
      <div className="modal-container">
        <div className="modal-header">
          <h2>Mon projet</h2>
          <span onClick={() => handleOpen(false)}>
            <RxCross2 />
          </span>
        </div>
        <div className="modal-body">
          <h2>
            <span>
              <BsTelephoneFill />
            </span>
            Être rappelé
          </h2>
          <p>Vous avez un projet concret ? Un cahier des charges ? </p>
          <p>Notre équipe vous rappelle dans les meilleurs délais ! </p>
          <form encType="multipart/form-data">
            <div className="form-group">
              <input
                type="text"
                placeholder="Entrer votre nom"
                onChange={(e) =>
                  setProject({ ...project, lastname: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Entrer votre prénom"
                onChange={(e) =>
                  setProject({ ...project, firstname: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) =>
                  setProject({ ...project, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Nom de la societé"
                onChange={(e) =>
                  setProject({ ...project, society: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Fonction au sein de la société"
                onChange={(e) =>
                  setProject({ ...project, func: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Code postal de la société"
                onChange={(e) =>
                  setProject({ ...project, codePostal: e.target.value })
                }
              />
            </div>

            <CustomSelect
              init={initCustom}
              setInit={setInitCustom}
              placeholder="Pays"
              data={countryList}
              getValue={(country: string) =>
                setProject({ ...project, country: country })
              }
              labelExtractor={(item: { name: string }) => item.name}
              keyExtractor={(item: { name: number }) => item.name}
              valueExtractor={(item: { name: number }) => item.name}
            />
            <div className="number__phone">
              <small className="dial__number">{dial}</small>
              <input
                type="text"
                placeholder="Veuillez saisir numéro de téléphone *"
                onChange={(e) =>
                  setProject({ ...project, phone: `${dial} ${e.target.value}` })
                }
                value={project.phone || ""}
              />
            </div>

            <CustomSelect
              init={initCustom}
              setInit={setInitCustom}
              placeholder="Sujet a aborder au téléphone ?"
              data={suggest}
              getValue={(subject: string) =>
                setProject({ ...project, subject: subject })
              }
              labelExtractor={(item: { name: string }) => item.name}
              keyExtractor={(item: { name: number }) => item.name}
              valueExtractor={(item: { name: number }) => item.name}
            />
            <p>
              MAINGER'S-HYDRAULIC s'engage à protéger et à respecter vos
              données.
            </p>
            <button onClick={(e) => submit(e)}>Être Rappelé</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const suggest = [
  {
    id: 1,
    name: " Confection & réparation de flexibles hydrauliques",
  },
  {
    id: 2,
    name: " Maintenance & Nettoyage industriel",
  },
  {
    id: 3,
    name: " Levage, manutention & transport",
  },
];
export default Modal;

/**
 *
 * function de la personne qui contact
 * avant code postal champ adresse
 * pays
 *
 *
 *
 *
 *
 */
