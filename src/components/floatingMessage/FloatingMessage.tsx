import { useEffect, useRef, useState } from "react";
import "./floatingMessage.css";
import { RxCross2 } from "react-icons/rx";
import toast, { Toaster } from "react-hot-toast";
import { RiSendPlaneFill } from "react-icons/ri";
import io from "socket.io-client";
import { v4 } from "uuid";
import { formatDistance, subDays } from "date-fns";
import { fr } from "date-fns/locale";
import axios, { AxiosRequestConfig } from "axios";
import { host } from "../../host";
import { Link } from "react-router-dom";

const socket = io(host);

type Props = {
  handleShow: Function;
  isShow: boolean;
};

interface Message {
  socketRoom: string | null | undefined;
  status: "client" | "operator";
  message: string;
  username: string;
  date: number;
}

const FloatingMessage = ({ handleShow, isShow }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [next, setNext] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();
  const [messages, setMessages] = useState<Message[]>([
    {
      socketRoom: sessionStorage.getItem("key"),
      status: "operator",
      message: "Bonjour, et bienvenue dans notre assistant client",
      username: "Admin",
      date: Date.now(),
    },
  ]);

  useEffect(() => {
    socket.on("romkey", (data) => {
      sessionStorage.setItem("key", data);
    });

    socket.on("message:operator", (data: Message) => {
      const roomKey = sessionStorage.getItem("key");
      if (data.socketRoom === roomKey) {
        setMessages((prev) => [...prev, data]);
      }
    });
  }, [socket]);

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!username) {
      return toast.error("Veuillez insérer votre nom");
    }
    if (email && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return toast.error("Votre adresse mail est invalide");
    }

    const uuid = v4();
    sessionStorage.setItem("key", uuid);
    socket.emit("client:create-room", {
      clientId: uuid,
      username: username,
      email: email,
      date: Date.now(),
    });

    setNext(true);
  };

  const sendMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!message) {
      alert("Non text");
    }
    const messageData: Message = {
      socketRoom: sessionStorage.getItem("key"),
      message: message || "",
      date: Date.now(),
      username: username,
      status: "client",
    };
    socket.emit("client:message", messageData);
    setMessages((prev) => [...prev, messageData]);
    setMessage("");
  };

  const isValidUrl = (urlString: string) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return urlPattern.test(urlString);
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
    });
  }, [messages]);

  if (!isShow) return <></>;
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
          <div className="message-content" ref={scrollRef}>
            {messages.map((message, id) => {
              if (message.status === "client") {
                return (
                  <div
                    className="messages"
                    key={`${message.socketRoom}-${id}-client-message`}
                  >
                    <div className="messages__header">
                      <span>{message.username[0].toLocaleUpperCase()}</span>
                      <p>
                        {" "}
                        {message.date &&
                          formatDistance(
                            subDays(new Date(message.date), 0),
                            new Date(Date.now()),
                            { locale: fr, addSuffix: true }
                          )}{" "}
                      </p>
                    </div>
                    {isValidUrl(message.message) ? (
                      <Link
                        to={message.message}
                        style={{
                          inlineSize: 50,
                          overflowWrap: "break-word",
                        }}
                        target="_blank"
                      >
                        {message.message}
                      </Link>
                    ) : (
                      <p
                        style={{
                          overflowWrap: "break-word",
                        }}
                      >
                        {message.message}
                      </p>
                    )}
                  </div>
                );
              } else {
                return (
                  <div
                    className="messages admin"
                    key={`${message.socketRoom}-${id}-admin-message`}
                  >
                    <div className="messages__header">
                      <span>A</span>
                      <p>
                        {" "}
                        {formatDistance(
                          subDays(new Date(message.date), 0),
                          new Date(Date.now()),
                          { locale: fr, addSuffix: true }
                        )}
                      </p>
                    </div>
                    {isValidUrl(message.message) ? (
                      <Link
                        to={message.message}
                        style={{
                          inlineSize: 50,
                          overflowWrap: "break-word",
                        }}
                        target="_blank"
                      >
                        {message.message}
                      </Link>
                    ) : (
                      <p
                        style={{
                          overflowWrap: "break-word",
                        }}
                      >
                        {message.message}
                      </p>
                    )}
                  </div>
                );
              }
            })}
          </div>
          <form className="message-send">
            <input
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button onClick={(e) => sendMessage(e)}>
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
