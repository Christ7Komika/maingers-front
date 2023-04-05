import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./invoiceModal.css";
import CustomSelect from "../input/CustomSelect";
import CustomFile from "../input/CustomFile";
import toast, { Toaster } from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { host } from "../../host";
import { countryList } from "../../countryList";
type Props = {
  isOpen: boolean;
  handleOpen: Function;
};

interface InvoiceType {
  lastname: null | string;
  firstname: null | string;
  society: null | string;
  codePostal: null | string;
  email: null | string;
  phone: null | string;
  country: null | string;
  invoice: null | string;
  file: null | File;
  infos: null | string;
}

const fields = {
  lastname: " au nom",
  firstname: " au prénom",
  society: " au nom de la société",
  codePostal: " au code postal de la société",
  email: " à l'adresse mail",
  phone: " au numéro de téléphone",
  country: " au pays",
  invoice: " au type de dévis",
  file: " au fichier",
  infos: " aux infos supplémentaire",
};

const InvoiceModal = ({ isOpen, handleOpen }: Props) => {
  const html = document.querySelector("html") as HTMLElement;
  const [initCustom, setInitCustom] = useState(false);
  const [dial, setDial] = useState("");
  const [invoice, setInvoice] = useState<InvoiceType>({
    lastname: null,
    firstname: null,
    society: null,
    codePostal: null,
    email: null,
    phone: null,
    country: null,
    invoice: null,
    file: null,
    infos: null,
  });

  const init = () => {
    setInitCustom(true);
    setInvoice({
      lastname: null,
      firstname: null,
      society: null,
      codePostal: null,
      email: null,
      phone: null,
      country: null,
      invoice: null,
      file: null,
      infos: null,
    });
  };
  useEffect(() => {
    if (invoice.country) {
      countryList.map((item) => {
        if (item.name === invoice.country) {
          setDial(item.dial_code);
          return;
        }
      });
    }
  }, [invoice.country]);

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

    for (const key in invoice) {
      if (Object.prototype.hasOwnProperty.call(invoice, key)) {
        //@ts-ignore
        const value = invoice[key];

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

    const form = new FormData();
    form.append("firstname", invoice.firstname as string);
    form.append("lastname", invoice.lastname as string);
    form.append("society", invoice.society as string);
    form.append("codePostal", invoice.codePostal as string);
    form.append("email", invoice.email as string);
    form.append("phone", invoice.phone as string);
    form.append("country", invoice.country as string);
    form.append("estimateType", invoice.invoice as string);
    if (invoice.file) {
      form.append("estimate", invoice.file as File);
    }
    form.append("infos", invoice.infos as string);

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: host + "/estimate",
      data: form,
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
    <div className="modal-invoice">
      <Toaster />
      <div className="modal-all-container">
        <div className="invoice-modal-container">
          <div className="modal-header">
            <h2>Demande de devis</h2>
            <span onClick={() => handleOpen(false)}>
              <RxCross2 />
            </span>
          </div>
          <div className="modal-body">
            <h2>Demander un devis</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              officiis velit laudantium aut, expedita enim.
            </p>
            <form encType="multipart/form-data">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Entrer votre nom"
                  required
                  onChange={(e) =>
                    setInvoice({ ...invoice, lastname: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Entrer votre prénom"
                  required
                  onChange={(e) =>
                    setInvoice({ ...invoice, firstname: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Nom de la socité"
                  required
                  onChange={(e) =>
                    setInvoice({ ...invoice, society: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Code postal de la société"
                  required
                  onChange={(e) =>
                    setInvoice({ ...invoice, codePostal: e.target.value })
                  }
                />
              </div>

              <input
                type="text"
                placeholder="Email"
                required
                onChange={(e) =>
                  setInvoice({ ...invoice, email: e.target.value })
                }
              />

              <CustomSelect
                init={initCustom}
                setInit={setInitCustom}
                placeholder="Pays"
                data={countryList}
                getValue={(country: string) =>
                  setInvoice({ ...invoice, country: country })
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
                    setInvoice({
                      ...invoice,
                      phone: `${dial} ${e.target.value}`,
                    })
                  }
                  value={invoice.phone || ""}
                />
              </div>
              <CustomSelect
                init={initCustom}
                setInit={setInitCustom}
                placeholder="Demander un devis sur"
                data={data}
                getValue={(devis: string) =>
                  setInvoice({ ...invoice, invoice: devis })
                }
                labelExtractor={(item: { name: string }) => item.name}
                keyExtractor={(item: { id: number }) => item.id}
                valueExtractor={(item: { id: number }) => item.id}
              />
              <CustomFile
                init={initCustom}
                setInit={setInitCustom}
                placeholder="Soumettre un fichier"
                getValue={(file: File) =>
                  setInvoice({ ...invoice, file: file })
                }
              />
              <textarea
                placeholder="Information supplémentaire"
                onChange={(e) =>
                  setInvoice({ ...invoice, infos: e.target.value })
                }
              ></textarea>

              <p>
                MAINGER'S-HYDRAULIC s'engage à protéger et à respecter vos
                données.
              </p>
              <button onClick={submit}>Soumettre</button>
            </form>
          </div>
        </div>{" "}
        *
      </div>
    </div>
  );
};

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
export default InvoiceModal;
