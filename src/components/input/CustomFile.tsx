import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import "./customFile.css";
type Props = {
  placeholder: string;
  getValue: Function;
  css?: React.CSSProperties;
  init: boolean;
  setInit: Function;
};

const CustomFile = ({ placeholder, getValue, css, init, setInit }: Props) => {
  const [file, setFile] = useState<File | null>();
  const [text, setText] = useState(file && file.name);
  const uuid = v4();

  useEffect(() => {
    getValue(file);
  }, [file]);

  useEffect(() => {
    if (init) {
      setFile(null);
      setInit(false);
    }
  }, [init]);

  const smaller = (word: string | undefined) => {
    if (word && word.length > 45) {
      const split = word.substring(0, 45);
      return split + "...";
    }
  };

  return (
    <div className="fileContainer" style={css}>
      <label htmlFor={uuid}>
        <span>{placeholder}</span>
      </label>
      <p>{smaller(file?.name)}</p>
      <input
        style={{ display: "none" }}
        id={uuid}
        type="file"
        onChange={(e) => {
          const fileData = e.target.files as FileList;
          setFile(fileData[0]);
        }}
      />
    </div>
  );
};

export default CustomFile;
