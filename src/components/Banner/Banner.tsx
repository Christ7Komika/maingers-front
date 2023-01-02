import React from "react";
import "./banner.css";
import Lottie from "lottie-react";

type Props = {
  animation: object;
};

const Banner: React.FC<Props> = ({ animation }) => {
  return (
    <div className="banner">
      <Lottie
        animationData={animation}
        loop={true}
        style={{
          height: 250,
        }}
      />
    </div>
  );
};

export default Banner;
