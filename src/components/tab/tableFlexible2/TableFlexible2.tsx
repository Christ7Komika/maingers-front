import React from "react";
import "../table.css";

type Props = {
  table: string[][];
};

const TableFlexible2: React.FC<Props> = ({ table }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {/* REFERENCE */}
            <th rowSpan={2}>
              <h3>Référence</h3>
            </th>

            {/* ID */}
            <th colSpan={2}>
              <h3>ID</h3>
            </th>

            {/* OD */}
            <th colSpan={2}>
              <h3>OD</h3>
            </th>

            {/* WP */}
            <th colSpan={2}>
              <h3>WP</h3>
            </th>

            {/* VACCUM */}
            <th rowSpan={2}>
              <h3>
                VACUUM <br />%
              </h3>
            </th>

            {/* BR/r */}
            <th>
              <h3>BR/r</h3>
            </th>

            {/* W */}
            <th>
              <h3>W</h3>
            </th>
          </tr>

          <tr>
            {/* ID */}

            <th>
              <h3>mm</h3>
            </th>
            <th>
              <h3>inch</h3>
            </th>

            {/* OD */}

            <th>
              <h3>mm</h3>
            </th>
            <th>
              <h3>inch</h3>
            </th>

            {/* WP */}
            <th>
              <h3>bar</h3>
            </th>
            <th>
              <h3>psi</h3>
            </th>

            {/* BR/r */}
            <th>
              <h3>mm</h3>
            </th>

            {/* W */}
            <th>
              <h3>kg/m</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {table.map((data, index) => (
            <tr key={`table-flexible-2-${index}`}>
              {data.map((value, index2) => (
                <td key={`table-flexible-2-td-${index2}`}>
                  <p>{value}</p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableFlexible2;
