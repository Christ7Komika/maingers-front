import React from "react";
import "./flexibles.css";
const Header = React.lazy(() => import("../../components/header/Header"));

const Flexibles = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default Flexibles;
