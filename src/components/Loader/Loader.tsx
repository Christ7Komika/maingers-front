import React from "react";
import Lottie from "lottie-react";
import Loading from "../../lottie/98742-loading.json";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <Lottie animationData={Loading} loop={true} />
    </div>
  );
};

export default Loader;
