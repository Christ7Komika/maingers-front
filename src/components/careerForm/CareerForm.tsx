import React, { useState } from "react";
import "./careerForm.css";
import CustomSelect from "../input/CustomSelect";
import CustomFile from "../input/CustomFile";

const CareerForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [cv, setCv] = useState<File>();
  const [targetPosition, setTargetPosition] = useState("");
  const [contractType, setContractType] = useState("");
  const [searchFunction, setSearchFunction] = useState("");
  const [motivation, setMotivation] = useState<File>();
  const [condition, setCondition] = useState(false);
  return (
    <div className="careerFormCintainer">
      <form className="container form-contact">
        <div className="form-contact-content">
          <h2>Déposer une candidature spontanée</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            debitis atque veniam esse repellat cupiditate. Deleniti adipisci
            ipsam voluptatem accusamus.
          </p>
          <form action="" className="form-contact-form">
            <input
              type="text"
              placeholder="Veuillez saisir votre nom"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Veuillez saisir votre prénom"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <CustomSelect
              data={genre}
              getValue={setTargetPosition}
              placeholder="Civilité"
              labelExtractor={(item: { name: string }) => item.name}
              keyExtractor={(item: { id: number }) => item.id}
              valueExtractor={(item: { id: number }) => item.id}
            />
            <input
              type="text"
              placeholder="Veuillez saisir adresse mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Veuillez saisir numéro de téléphone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <CustomSelect
              data={data}
              getValue={setCountry}
              placeholder="Pays"
              labelExtractor={(item: { name: string }) => item.name}
              keyExtractor={(item: { id: number }) => item.id}
              valueExtractor={(item: { id: number }) => item.id}
            />
            <CustomFile placeholder="Insérez votre CV" getValue={setCv} />
            <CustomFile
              placeholder="Insérez une lettre de motivation"
              getValue={setMotivation}
            />
            <CustomSelect
              data={data}
              getValue={setTargetPosition}
              placeholder="Poste visé"
              labelExtractor={(item: { name: string }) => item.name}
              keyExtractor={(item: { id: number }) => item.id}
              valueExtractor={(item: { id: number }) => item.id}
            />
            <CustomSelect
              data={data}
              getValue={setContractType}
              placeholder="Type de contrat"
              labelExtractor={(item: { name: string }) => item.name}
              keyExtractor={(item: { id: number }) => item.id}
              valueExtractor={(item: { id: number }) => item.id}
            />
            <CustomSelect
              data={data}
              getValue={setSearchFunction}
              placeholder="Fonction recherché"
              labelExtractor={(item: { name: string }) => item.name}
              keyExtractor={(item: { id: number }) => item.id}
              valueExtractor={(item: { id: number }) => item.id}
            />

            <button>Valider</button>
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
