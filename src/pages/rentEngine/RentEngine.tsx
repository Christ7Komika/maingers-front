import React from "react";
const Header = React.lazy(() => import("../../components/header/Header"));

const RentEngine = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default RentEngine;
