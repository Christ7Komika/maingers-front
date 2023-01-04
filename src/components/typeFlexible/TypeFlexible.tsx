import React, { useEffect, useState } from "react";
import { FaChevronRight, FaSearch } from "react-icons/fa";
import Flexible from "../../assets/flexibles/flexibles.png";
const CustomSelect = React.lazy(() => import("../input/CustomSelect"));
import "./typeFlexible.css";
import { flexibleTypeData } from "../../data/flexibleType";
import { Link, useParams } from "react-router-dom";
import { TYPE_FLEXIBLE } from "../../data/flexibleType";
import { v4 as uuid } from "uuid";
const filterData = [
  {
    name: "dbvniudvh",
  },
];

const TypeFlexible = () => {
  const [flexibleList, setFlexibleList] = useState(flexibleTypeData);
  const [data, setData] = useState<null | TYPE_FLEXIBLE>(null);
  const [norme, setNorme] = useState(null);
  const [name, setName] = useState(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const flexible = flexibleList.filter(
      (flexible) => flexible.id.toString() == id
    );
    setData(flexible.flat()[0]);
  }, [flexibleTypeData]);

  return (
    <div className="container type-flexible">
      <div className="flexible-type-header">
        <h2>Flexibles type {data?.type} </h2>
        <form className="flexible-type-filter">
          <div className="search-bar">
            <span>
              <FaSearch />
            </span>
            <input type="text" />
          </div>
          <CustomSelect
            placeholder="Norme ISO"
            labelExtractor={(item: { name: string }) => item.name}
            keyExtractor={(item: { id: number }) => item.id}
            valueExtractor={(item: { id: number }) => item.id}
            data={filterData}
            getValue={setNorme}
          />
          <button>Filtrer</button>
        </form>
      </div>
      <div className="flexible-type-cards">
        {data?.data.map((flexibleInfos) => (
          <div className="flexible-type-card" key={uuid()}>
            <div className="flexible-type-card-img">
              <img src={Flexible} alt="" />
            </div>
            <div className="flexible-type-card-content">
              <h3>{flexibleInfos?.name}</h3>
              <Link
                to={`/departement/flexibles/type/infos/${data?.id}/${flexibleInfos?.IdTableau}`}
              >
                Plus d'infos
                <span>
                  <FaChevronRight />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeFlexible;
