import { useState } from "react";
import "./floatingMessage.css";
import { RxCross2 } from "react-icons/rx";
import toast, { Toaster } from "react-hot-toast";
import { RiSendPlaneFill } from "react-icons/ri";

type Props = {
  handleShow: Function;
  isShow: boolean;
};

const FloatingMessage = ({ handleShow, isShow }: Props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [next, setNext] = useState(false);
  if (!isShow) return <></>;

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!username) {
      return toast.error("Veuillez insérer votre nom");
    }
    if (email && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return toast.error("Votre adresse mail est invalide");
    }

    setNext(true);
  };
  return (
    <div className="floatingMessage">
      <Toaster />
      <div className="floating-header">
        <h2>Message instantanée</h2>
        <span onClick={() => handleShow(false)}>
          <RxCross2 />
        </span>
      </div>
      {next ? (
        <div className="message-body">
          <div className="message-content">
            <div className="client-message">
              <div className="bubble">C</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                reiciendis.
              </p>
            </div>
            <div className="admin-message">
              <p>Lorem ipsum dolor sit.</p>
              <div className="bubble">A</div>
            </div>
            <div className="client-message">
              <div className="bubble">C</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                reiciendis.
              </p>
            </div>
            <div className="admin-message">
              <p>Lorem ipsum dolor sit.</p>
              <div className="bubble">A</div>
            </div>
            <div className="client-message">
              <div className="bubble">C</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                reiciendis.
              </p>
            </div>
            <div className="admin-message">
              <p>Lorem ipsum dolor sit.</p>
              <div className="bubble">A</div>
            </div>
            <div className="client-message">
              <div className="bubble">C</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                reiciendis.
              </p>
            </div>
            <div className="admin-message">
              <p>Lorem ipsum dolor sit.</p>
              <div className="bubble">A</div>
            </div>
          </div>
          <form className="message-send">
            <input type="text" />
            <button>
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      ) : (
        <form className="floating-body">
          <h3>
            Bonjour,
            <br />
            Bienvenu dans MAINGER'S-HYDRAULIC Message.
          </h3>
          <p>Veuillez entrer votre nom</p>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />

          <p>Si vous souhaitez être recontacter inscrivez votre email</p>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button onClick={(e) => submit(e)}>Suivant</button>
        </form>
      )}
    </div>
  );
};

export default FloatingMessage;
