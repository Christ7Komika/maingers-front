import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaSearch,
  FaAngleDown,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import Layer from "../../portals/Layer";
import "./header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [uuid] = useState(uuidV4);
  const location = useLocation();

  useEffect(() => {}, []);

  return (
    <>
      {open && (
        <div className="header-layer" onClick={() => setOpen(false)}></div>
      )}
      <div className="header">
        <div className="header--content">
          <div className="logo">
            <h1>LOGO</h1>
          </div>
          <div className="header--infos">
            <div className="header--search-bar">
              <div className="search">
                <button>
                  <FaSearch />
                </button>
                <input type="text" placeholder="Recherche" />
              </div>
            </div>
            <div className="header--contact">
              <a href="#" className="social-network">
                <FaFacebook />
              </a>
              <a href="#" className="social-network">
                <FaEnvelope />
              </a>
              <a href="#" className="phone-number">
                <FaPhone /> 06 XXX XX XX
              </a>
            </div>
          </div>
        </div>
        <nav className="header--nav">
          <div className="main-nav">
            <div
              className={location.pathname === "/" ? "link selected" : "link"}
            >
              <Link to="/">Acceuil</Link>
            </div>
            <div
              className={
                location.pathname === "/departement"
                  ? "link selected select-menu"
                  : "link select-menu"
              }
            >
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(!open);
                }}
              >
                Département
                <span>
                  <FaAngleDown />
                </span>
              </a>

              {open && (
                <div className="sub-menu" id="select-sub-menu" data-id={uuid}>
                  <Link
                    className="element"
                    data-id={uuid}
                    to={"/departement"}
                    onClick={(e) => {
                      setOpen(false);
                    }}
                  >
                    Flexible
                  </Link>
                  <Link
                    className="element"
                    data-id={uuid}
                    to={"/departement"}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                    }}
                  >
                    Flexible
                  </Link>
                  <Link
                    className="element"
                    data-id={uuid}
                    to={"/departement"}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                    }}
                  >
                    Flexible
                  </Link>
                  <Link
                    className="element"
                    data-id={uuid}
                    to={"/departement"}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                    }}
                  >
                    Flexible
                  </Link>
                </div>
              )}
            </div>
            <div
              className={
                location.pathname === "/services" ? "link selected" : "link"
              }
            >
              <Link to="/services">Nos Services</Link>
            </div>
            <div
              className={
                location.pathname === "/about" ? "link selected" : "link"
              }
            >
              <Link to="/about">A Propos</Link>
            </div>
            <div
              className={
                location.pathname === "/contact" ? "link selected" : "link"
              }
            >
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="account"></div>
        </nav>
      </div>
    </>
  );
};

export default Header;
