import React, { useEffect, useState } from "react";
import "./infosFlexible.css";
import { flexibleTypeData } from "../../data/flexibleType";
import { TYPE_FLEXIBLE } from "../../data/flexibleType";
import { flexiblesTableData } from "../../data/flexibleType";
import TableFlexible from "../tab/default/TableFlexible";
import TableFlexible2 from "../tab/tableFlexible2/TableFlexible2";
import TableFlexible3 from "../tab/tableFlexible3/TableFlexible3";
import TableFlexible4 from "../tab/tableFlexible4/TableFlexible4";

const InfosFlexible = () => {
  const idType = sessionStorage.getItem("flexibleId");
  const idTab = sessionStorage.getItem("tabId");
  const [flexibles, setFlexibles] = useState(flexibleTypeData);
  const [flexiblesTable, setFlexiblesTable] = useState(flexiblesTableData);
  const [tables, setTables] = useState(flexiblesTableData);
  const [table, setTable] = useState<null | any>();
  const [flexible, setFlexible] = useState<null | TYPE_FLEXIBLE>();
  const [flexibleTable, setFlexibleTable] = useState<null | any>();

  useEffect(() => {
    const flexibleInfos = flexibles.filter(
      (data) => data.id.toString() == idType
    );
    setFlexible(flexibleInfos.flat()[0]);
  }, []);

  useEffect(() => {
    const tabData = flexible?.data.filter(
      (data) => data.IdTableau.toString() === idTab
    );
    setFlexibleTable(tabData?.flat()[0]);
  }, [flexible]);

  useEffect(() => {
    const tab = tables.filter((data) => data.id === flexibleTable?.IdTableau);
    setTable(tab.flat()[0]);
  }, [flexibleTable]);

  return (
    <div className="container flexible-infos">
      <h2>Name : {flexibleTable?.name}</h2>
      <p>{flexibleTable?.def}</p>
      <div className="flexible-infos-tab">
        {table?.type === "table-1" ? (
          <TableFlexible table={table?.table} />
        ) : table?.type === "table-2" ? (
          <TableFlexible2 table={table?.table} />
        ) : table?.type === "table-3" ? (
          <TableFlexible3 table={table?.table} />
        ) : table?.type === "table-4" ? (
          <TableFlexible4 table={table?.table} />
        ) : (
          ""
        )}
      </div>

      {/* APPLICATION */}
      {flexibleTable?.application && (
        <div className="flexible-infos-desc">
          <h3>Application</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.application
              ?.split("&")
              ?.map((value: string, index: number) => (
                <li key={`flexibles-elt-${index}`}>{value}</li>
              ))}
          </ul>
        </div>
      )}

      {/* CARACTERISTIQUE TECHNIQUE */}
      {flexibleTable?.caracteristique && (
        <div className="flexible-infos-desc">
          <h3>Caractéristique technique</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.caracteristique
              ?.split("&")
              ?.map((value: string, index: number) => (
                <li key={`flexibles-elt-${index}`}>{value}</li>
              ))}
          </ul>
        </div>
      )}

      {/* TUBE */}
      {flexibleTable?.tube && (
        <div className="flexible-infos-desc">
          <h3>Tube</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.tube
              ?.split("&")
              ?.map((value: string, index: number) => (
                <li key={`flexibles-elt-${index}`}>{value}</li>
              ))}
          </ul>
        </div>
      )}

      {/* ARMATURE */}
      {flexibleTable?.armature && (
        <div className="flexible-infos-desc">
          <h3>Armature</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.armature
              ?.split("&")
              ?.map((value: string, index: number) => (
                <li key={`flexibles-elt-${index}`}>{value}</li>
              ))}
          </ul>
        </div>
      )}

      {/* REVETEMENT */}
      {flexibleTable?.revetement && (
        <div className="flexible-infos-desc">
          <h3>Revêtement</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.revetement
              ?.split("&")
              ?.map((value: string, index: number) => (
                <li key={`flexibles-elt-${index}`}>{value}</li>
              ))}
          </ul>
        </div>
      )}

      {/* UTILISATION */}
      {flexibleTable?.utilisation && (
        <div className="flexible-infos-desc">
          <h3>Utilisation</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.utilisation
              ?.split("&")
              ?.map((value: string, index: number) => (
                <li key={`flexibles-elt-${index}`}>{value}</li>
              ))}
          </ul>
        </div>
      )}

      {/* C.D.S */}
      {flexibleTable?.cds && (
        <div className="flexible-infos-desc">
          <h3>C.d.S</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.cds
              ?.split("&")
              ?.map((value: string, index: number) => (
                <li key={`flexibles-elt-${index}`}>{value}</li>
              ))}
          </ul>
        </div>
      )}

      {/* TEMPERATURE */}
      {flexibleTable?.temperature && (
        <div className="flexible-infos-desc">
          <h3>Température</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.temperature
              ?.split("&")
              ?.map((value: string, index: number) => (
                <li key={`flexibles-elt-${index}`}>{value}</li>
              ))}
          </ul>
        </div>
      )}

      {/* TEMPERATURE EN CONTINU */}
      {flexibleTable?.temperatureContinu && (
        <div className="flexible-infos-desc">
          <h3>Température en continu</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.temperatureContinu
              ?.split("&")
              ?.map((value: string, index: number) => (
                <li key={`flexibles-elt-${index}`}>{value}</li>
              ))}
          </ul>
        </div>
      )}

      {/* TEMPERATURE MAXI */}
      {flexibleTable?.temperatureMaxi && (
        <div className="flexible-infos-desc">
          <h3>Température maxi</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.temperatureMaxi
              ?.split("&")
              ?.map((value: string, index: number) => (
                <li key={`flexibles-elt-${index}`}>{value}</li>
              ))}
          </ul>
        </div>
      )}

      {/* NORME */}
      {flexibleTable?.norme && (
        <div className="flexible-infos-desc">
          <h3>Norme</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.norme
              ?.split("&")
              ?.map((value: string, index: number) => (
                <li key={`flexibles-elt-${index}`}>{value}</li>
              ))}
          </ul>
        </div>
      )}

      {/* OPTION */}
      {flexibleTable?.option && (
        <div className="flexible-infos-desc">
          <h3>Option</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.option
              ?.split("&")
              ?.map((value: string, index: number) => (
                <li key={`flexibles-elt-${index}`}>{value}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InfosFlexible;
