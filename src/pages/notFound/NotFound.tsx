import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="page-notfound">
      <h1>OUPS</h1>
      <h2>Page non trouvé</h2>
      <Link to={"/"}>Retourné à la page d'acceuil</Link>
    </div>
  );
};

export default NotFound;
