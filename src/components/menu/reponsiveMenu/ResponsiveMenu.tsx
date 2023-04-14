import React, { useState } from "react";
import { FaBars, FaPlus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Logo from "../../../assets/logo/Logo.svg";
import "./responsiveMenu.css";

const ResponsiveMenu = () => {
  const location = useLocation();
  const [menu, setMenu] = useState<boolean>(false);
  const [submenu, setSubmenu] = useState<boolean>(false);

  return (
    <div className="small-header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <span onClick={() => setMenu(true)}>
        <FaBars />
      </span>
      {menu && (
        <div className="menu">
          <span>
            <FaPlus onClick={() => setMenu(false)} />
          </span>
          <div className="menu-list">
            <div className="sub-menu">
              <Link to="/" className={location.pathname == "/" ? "select" : ""}>
                Acceuil
              </Link>
            </div>
            <div className="sub-menu drop-menu">
              <small
                className={
                  location.pathname.search("/services") != -1
                    ? "drop-select"
                    : submenu
                    ? "drop-select"
                    : ""
                }
                onClick={() => setSubmenu(!submenu)}
              >
                Services
              </small>
              {submenu && (
                <div className="drop-submenu">
                  <Link
                    className={
                      location.pathname == "/services/flexibles" ? "select" : ""
                    }
                    data-id={uuid}
                    to={"/services/flexibles"}
                    onClick={(e) => setMenu(false)}
                  >
                    Confection & réparation de flexibles hydrauliques
                  </Link>
                  <Link
                    className={
                      location.pathname == "/services/industrial-cleaning"
                        ? "select"
                        : ""
                    }
                    data-id={uuid}
                    to={"/services/industrial-cleaning"}
                    onClick={(e) => setMenu(false)}
                  >
                    Maintenance & Nettoyage industriel
                  </Link>
                  <Link
                    className={
                      location.pathname == "/services/rent-engine"
                        ? "select"
                        : ""
                    }
                    data-id={uuid}
                    to={"/services/rent-engine"}
                    onClick={(e) => setMenu(false)}
                  >
                    Levage, manutention & transport
                  </Link>
                </div>
              )}
            </div>
            <div className="sub-menu">
              <Link
                to="/career"
                className={location.pathname == "/career" ? "select" : ""}
              >
                Carrières
              </Link>
            </div>
            <div className="sub-menu">
              <Link
                to="/actualities"
                className={location.pathname == "/actualities" ? "select" : ""}
              >
                Actualités
              </Link>
            </div>
            <div className="sub-menu">
              <Link
                to="/about"
                className={location.pathname == "/about" ? "select" : ""}
              >
                A Propos
              </Link>
            </div>
            <div className="sub-menu">
              <Link
                to="/contact"
                className={location.pathname == "/contact" ? "select" : ""}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveMenu;
