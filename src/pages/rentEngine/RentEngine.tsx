import React from "react";
import "./rentengine.css";
const Header = React.lazy(() => import("../../components/header/Header"));

const RentEngine = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default RentEngine;
