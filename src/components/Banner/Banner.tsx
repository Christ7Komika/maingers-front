import React from "react";
import "./banner.css";

type Props = {
  title: string;
  description: string;
};

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          aliquid tenetur qui ipsam ex ipsum? Numquam ullam reiciendis commodi
          sequi!
        </p>
      </div>
    </div>
  );
};

export default Banner;
