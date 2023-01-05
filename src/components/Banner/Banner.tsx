import React from "react";
import "./banner.css";
import Lottie from "lottie-react";

import lottie from "../../lottie/lf30_about_us.json";
import contact from "../../lottie/129404-contact-us.json";
import about from "../../lottie/lf30_about_us.json";
import { useLocation } from "react-router-dom";

type Props = {
  title: string;
};

const Banner: React.FC<Props> = ({ title }) => {
  const location = useLocation();
  return (
    <div className="banner">
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;
