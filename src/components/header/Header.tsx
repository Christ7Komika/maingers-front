import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaSearch,
  FaAngleDown,
  FaBars,
  FaPlus,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import Layer from "../../portals/Layer";
import "./header.css";
import Logo from "../../assets/logo/Logo.svg";
import ResponsiveMenu from "../menu/reponsiveMenu/ResponsiveMenu";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [uuid] = useState<string>(uuidV4);
  const location = useLocation();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });

  return (
    <>
      {open && (
        <div className="header-layer" onClick={() => setOpen(false)}></div>
      )}
      {width >= 650 ? (
        <div className="header">
          <div className="header--content">
            <div className="logo">
              <img src={Logo} alt="logo" />
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
                  location.pathname.search("/departement") != -1
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
                      to={"/departement/flexibles"}
                      onClick={(e) => setOpen(false)}
                    >
                      Flexible
                    </Link>
                    <Link
                      className="element"
                      data-id={uuid}
                      to={"/departement/industrial-cleaning"}
                      onClick={(e) => setOpen(false)}
                    >
                      Néttoyage industriel
                    </Link>
                    <Link
                      className="element"
                      data-id={uuid}
                      to={"/departement/rent-engine"}
                      onClick={(e) => setOpen(false)}
                    >
                      Location engins élevateurs
                    </Link>
                  </div>
                )}
              </div>
              <div
                className={
                  location.pathname === "/shop" ? "link selected" : "link"
                }
              >
                <Link to="/shop">Boutique</Link>
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
      ) : (
        <ResponsiveMenu />
      )}
    </>
  );
};

export default Header;
