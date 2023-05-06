import React, { useEffect, useState } from "react";
import "./formcontact.css";
import toast, { Toaster } from "react-hot-toast";
import ContactImg from "../../assets/contact/contact.jpg";
import CustomFile from "../input/CustomFile";
import axios, { AxiosError } from "axios";
import CircularSpinner from "../spinner/CircularSpinner";
import { host } from "../../host";
import CustomSelectNumber from "../input/CustomSelectNumber";
import { countryList } from "../../countryList";
import _ from "lodash";

const FormContact = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [object, setObject] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [file, setFile] = useState<File | null>();
  const [isLoad, setIsLoad] = useState(false);
  const [initFile, setInitFile] = useState(false);
  const [initCustom, setInitCustom] = useState(false);
  const [countryNum, setCountryNum] = useState("");
  const [dial, setDial] = useState("");

  const init = () => {
    setName("");
    setEmail("");
    setPhone("");
    setObject("");
    setMessage("");
    setInitFile(true);
    setInitCustom(false);
    setCountryNum("");
  };

  useEffect(() => {
    if (countryNum) {
      countryList.map((item) => {
        if (item.name === countryNum) {
          setDial(item.dial_code);
          return;
        }
      });
    }
  }, [countryNum]);

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log({
      name: name,
      email: email,
      phone: phone,
      object: object,
      message: message,
      file: file,
    });
    if (!name) {
      return toast.error("Veuillez saisir votre nom");
    }
    if (!email) {
      return toast.error("Veuillez saisir votre adresse mail");
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return toast.error("Votre adresse mail est invalide");
    }
    if (!countryNum) {
      return toast.error(
        "Veuillez selectionner le code de téléphone de votre pays"
      );
    }

    if (!phone) {
      return toast.error("Veuillez inserer votre numéro de téléphone");
    }

    if (!object) {
      return toast.error("Veuillez saisir l'objet de votre message");
    }

    if (!message) {
      return toast.error("Veuillez inserer un message");
    }

    setIsLoad(true);
    const data = new FormData();

    data.append("name", name);
    data.append("email", email.toLowerCase());
    data.append("phone", `${countryNum} ${phone}`);
    if (file) {
      data.append("contact", file);
    }
    data.append("object", object);
    data.append("message", message);

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: host + "/contact",
      data: data,
    };

    axios(config)
      .then((res) => {
        init();
        setIsLoad(false);
        return toast.success("Votre demande a été envoyé avec succès");
      })
      .catch((err: AxiosError) => {
        setIsLoad(false);
        if (err.response?.status === 400) {
          return toast.error(
            "Erreur d'envoi, verifier si le fichier soumis est de type pdf"
          );
        }
        return toast.error(
          "Une erreur est survenue lors de l'envoi de vos données, veuillez réessayer."
        );
      });
  };

  return (
    <form className="container form-contact">
      <Toaster />
      <div className="form-contact-left">
        <h2>Nous Contacter</h2>
        <form encType="multipart/form-data" className="form-contact-form">
          <input
            type="text"
            placeholder="Veuillez saisir votre nom *"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <input
            type="email"
            placeholder="Veuillez saisir adresse mail *"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <div className="contact__country__number">
            <CustomSelectNumber
              init={initCustom}
              setInit={setInitCustom}
              data={_.sortBy(countryList, "name")}
              getValue={(country: string) => setCountryNum(country)}
              placeholder="Code"
              labelExtractor={(item: { name: string }) => item.name}
              keyExtractor={(item: { name: number }) => item.name}
              valueExtractor={(item: { name: number }) => item.name}
            />
            <div className="number__phone">
              <small className="dial__number">{dial}</small>
              <input
                type="number"
                placeholder="Téléphone *"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                pattern="[0-9]*"
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Veuillez saisir l'objet de votre message *"
            onChange={(e) => setObject(e.target.value)}
            value={object}
            required
          />
          <CustomFile
            init={initFile}
            setInit={setInitFile}
            placeholder="Soumêtre un fichier "
            getValue={setFile}
            css={{ maxWidth: "100%" }}
          />
          <textarea
            placeholder="Veuillez saisir votre message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          <button type="submit" onClick={submit}>
            {!isLoad ? "Envoyer" : <CircularSpinner />}
          </button>
        </form>
      </div>
      <div className="form-contact-right">
        <img src={ContactImg} alt="Image de contact" />
      </div>
    </form>
  );
};

export default FormContact;
