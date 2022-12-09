import { createPortal } from "react-dom";
import React, { ReactElement } from "react";
import "./layer.css";

type childrenType = {
  children: ReactElement | string;
};

const Layer = ({ children }: childrenType) => {
  return <div className="modal">{children}</div>;
};

export default Layer;
