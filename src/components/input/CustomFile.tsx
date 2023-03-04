import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import "./customFile.css";
type Props = {
  placeholder: string;
  getValue: Function;
};

const CustomFile = ({ placeholder, getValue }: Props) => {
  const [file, setFile] = useState<File>();
  const [text, setText] = useState(file && file.name);
  const uuid = v4();

  useEffect(() => {
    getValue(file);
  }, [file]);

  // useEffect(() => {
  //   if()
  // }, [file]);
  return (
    <div className="fileContainer">
      <label htmlFor={uuid}>
        <span>{placeholder}</span>
      </label>
      <p>{file?.name}</p>
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
