import React from "react";
import "./banner.css";
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
