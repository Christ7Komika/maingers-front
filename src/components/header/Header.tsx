import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaAngleDown,
  FaLinkedin,
  FaInstagram,
  FaSearch,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import "./header.css";
import Logo from "../../assets/logo/Logo1.svg";
import ResponsiveMenu from "../menu/reponsiveMenu/ResponsiveMenu";
import { TbPhoneCall } from "react-icons/tb";

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
      {width >= 650 ? (
        <div className="header">
          <div className="header--header">
            <div className="header--contact">
              <a href="#" className="phone-number">
                <span>
                  <FaFacebook size={20} />
                </span>
                <span>
                  <FaLinkedin size={20} />
                </span>
                <span>
                  <FaInstagram size={20} />
                </span>
              </a>
            </div>
            <div className="header--contact">
              <a href="#" className="phone-number">
                <span>
                  <TbPhoneCall size={25} />
                </span>
                <div className="list--number">
                  <span>+242 06 629 4230 </span>
                  <span>/ +242 06 629 4230</span>
                </div>
              </a>
            </div>
          </div>
          <div className="header--content">
            {/* Logo */}
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>

            {/* NavBar */}
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
                  <div
                    className="sub__menu"
                    id="select__sub__menu"
                    data-id={uuid}
                  >
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
              {/* <div
                className={
                  location.pathname === "/contact" ? "link selected" : "link"
                }
              >
                <Link to="/contact">Contact</Link>
              </div> */}
            </div>

            {/* SearchBar */}
            <div className="nav__search">
              <span>
                <FaSearch />
              </span>
              <div className="search__bar">
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ResponsiveMenu />
      )}
    </>
  );
};

export default Header;
