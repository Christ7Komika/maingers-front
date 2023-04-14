import React from "react";
import "./banner.css";
import BreakComb from "../breakcomb/BreakComb";
type Props = {
  title: string;
};

const Banner: React.FC<Props> = ({ title }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;
