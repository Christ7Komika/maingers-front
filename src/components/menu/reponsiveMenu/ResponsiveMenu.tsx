import { useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPlus,
} from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Logo from "../../../assets/logo/Logo1.svg";

import "./responsiveMenu.css";
import { RiWhatsappFill } from "react-icons/ri";

const ResponsiveMenu = () => {
  const location = useLocation();
  const [menu, setMenu] = useState<boolean>(false);
  const [submenu, setSubmenu] = useState<boolean>(false);

  return (
    <div className="small-header">
      <div className="mobile--container">
        <div className="mobile--top">
          <div className="mobile--social--network">
            <NavLink to="#">
              <span>
                <FaFacebook size={20} />
              </span>
            </NavLink>
            <NavLink to="#">
              <span>
                <FaLinkedin size={20} />
              </span>
            </NavLink>
            <NavLink to="#">
              <span>
                <FaInstagram size={20} />
              </span>
            </NavLink>
          </div>
          <div className="mobile--contact">
            <span>
              <RiWhatsappFill size={25} fill="	#25d366" />
            </span>
            <div className="list--number">
              <span>+242 06 629 4230 </span>
              <span>/ +242 05 520 25 43</span>
            </div>
          </div>
        </div>
        <div className="mobile--bottom">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <span onClick={() => setMenu(true)}>
            <FaBars size={25} />
          </span>
        </div>
      </div>
      {menu && (
        <div className="menu">
          <span>
            <FaPlus onClick={() => setMenu(false)} />
          </span>
          <div className="menu-list">
            <div className="sub-menu">
              <NavLink
                to="/"
                className={location.pathname == "/" ? "select" : ""}
              >
                Acceuil
              </NavLink>
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
                  <NavLink
                    className={
                      location.pathname == "/services/flexibles" ? "select" : ""
                    }
                    data-id={uuid}
                    to={"/services/flexibles"}
                    onClick={(e) => setMenu(false)}
                  >
                    Confection & réparation de flexibles hydrauliques
                  </NavLink>
                  <NavLink
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
                  </NavLink>
                  <NavLink
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
                  </NavLink>
                </div>
              )}
            </div>
            <div className="sub-menu">
              <NavLink
                to="/career"
                className={location.pathname == "/career" ? "select" : ""}
              >
                Carrières
              </NavLink>
            </div>
            <div className="sub-menu">
              <NavLink
                to="/actualities"
                className={location.pathname == "/actualities" ? "select" : ""}
              >
                Actualités
              </NavLink>
            </div>
            <div className="sub-menu">
              <NavLink
                to="/about"
                className={location.pathname == "/about" ? "select" : ""}
              >
                A Propos
              </NavLink>
            </div>
            <div className="sub-menu">
              <NavLink
                to="/contact"
                className={location.pathname == "/contact" ? "select" : ""}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveMenu;
