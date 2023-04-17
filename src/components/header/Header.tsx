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
import "./header.css";
import Logo from "../../assets/logo/Logo.png";
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
                <a href="#" className="phone-number">
                  <FaPhone /> 06 629 4230
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
                  location.pathname.search("/services") != -1
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
                  Services
                  <span>
                    <FaAngleDown />
                  </span>
                </a>

                {open && (
                  <div className="sub-menu" id="select-sub-menu" data-id={uuid}>
                    <Link
                      className="element"
                      data-id={uuid}
                      to={"/services/flexibles"}
                      onClick={(e) => setOpen(false)}
                    >
                      Confection & réparation de flexibles hydrauliques
                    </Link>
                    <Link
                      className="element"
                      data-id={uuid}
                      to={"/services/industrial-cleaning"}
                      onClick={(e) => setOpen(false)}
                    >
                      Maintenance & Nettoyage industriel
                    </Link>
                    <Link
                      className="element"
                      data-id={uuid}
                      to={"/services/rent-engine"}
                      onClick={(e) => setOpen(false)}
                    >
                      Levage, manutention & transport
                    </Link>
                  </div>
                )}
              </div>
              <div
                className={
                  location.pathname === "/career" ? "link selected" : "link"
                }
              >
                <Link to="/career">Carrières</Link>
              </div>
              <div
                className={
                  location.pathname === "/actualities"
                    ? "link selected"
                    : "link"
                }
              >
                <Link to="/actualities">Actualités</Link>
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
