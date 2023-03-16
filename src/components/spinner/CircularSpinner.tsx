import React from "react";
import { SpinnerCircular } from "spinners-react";

const CircularSpinner = () => {
  return (
    <SpinnerCircular
      size={30}
      thickness={180}
      speed={100}
      color="#ff4c01"
      secondaryColor="rgba(172, 57, 57, 0)"
    />
  );
};

export default CircularSpinner;
