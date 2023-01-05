import React from "react";
import "./tableFlexible.css";

type Props = {
  table: {
    head: {
      title: string[];
      measure: string[];
    };
    value: string[][];
  };
};

const TableFlexible: React.FC<Props> = ({ table }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {table.head.title.map((data, index) => (
              <th key={`table-flexible-1-title-${index}`}>{data}</th>
            ))}
          </tr>
          <tr>
            {table.head.measure.map((data, index) => (
              <th key={`table-flexible-1-measure-${index}`}>
                {data === "empty" ? "" : data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.value.map((data, index) => (
            <tr key={`table-flexible-1-body-${index}`}>
              {data.map((value, index2) => (
                <td key={`table-flexible-1-body-elt-${index2}`}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableFlexible;
