import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { v4 as uuid } from "uuid";
import "./customSelect.css";
import _ from "lodash";

interface Props {
  placeholder: string;
  data: Array<any>;
  getValue: Function;
  labelExtractor: Function;
  keyExtractor: Function;
  valueExtractor: Function;
  init: boolean;
  setInit: Function;
}

const CustomSelectNumber = ({
  placeholder,
  data = [],
  getValue,
  labelExtractor,
  keyExtractor,
  valueExtractor,
  init,
  setInit,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [native, setNative] = useState(null);
  const selectRef = useRef<HTMLDivElement>(null);

  document.body.addEventListener("click", (e: any) => {
    if (
      selectRef.current &&
      selectRef.current.id &&
      e.target.id !== selectRef.current.id &&
      open
    )
      if (e.target.id !== "custom-select" && open) {
        setOpen(false);
      }
  });

  const SelectItem = (item: React.SetStateAction<null>) => {
    if (valueExtractor(item) === selected) {
      setSelected(null);
      setNative(null);
    } else {
      setSelected(valueExtractor(item));
      setNative(item);
    }
    setOpen(false);
  };
  useEffect(() => {
    if (init) {
      setSelected(null);
      setNative(null);
      setInit(false);
    }
  }, [init]);

  useEffect(() => {
    if (getValue) {
      getValue(selected);
    }
  }, [selected]);

  const limitText = (text: string) => {
    if (text.length > 15) {
      return text.substring(0, 15) + "...";
    }
  };

  return (
    <div className="custom-select" ref={selectRef} style={{ width: 130 }}>
      <div
        className="select"
        id={uuid()}
        onClick={(e) => {
          setOpen(!open);
        }}
        ref={selectRef}
        style={
          open
            ? {
                borderRadius: "5px 5px 0 0",
                borderBottom: "1px solid rgba(0, 0, 0, 0.1) ",
              }
            : selected && !open
            ? { outline: "1px solid #e9edf0" }
            : {}
        }
      >
        <small>
          {selected ? labelExtractor(native) : limitText(placeholder)}
        </small>
        <span>
          <FiChevronDown />
        </span>
      </div>
      {open && (
        <div className="options">
          {data.map((item) => (
            <div
              className="option"
              key={keyExtractor(item)}
              id={"option-" + valueExtractor(item)}
              onClick={() => SelectItem(item)}
              style={
                selected == valueExtractor(item)
                  ? { background: "#0082df94" }
                  : {}
              }
            >
              <p>{labelExtractor(item)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelectNumber;
