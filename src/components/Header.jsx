import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppContext } from "@context";
import { useMedia, useModal } from "@hooks";

import Arrow from "@icons/arrow-down.svg";
import Logo from "@icons/logoSolana.png";

import "@stylesComponents/Header.scss";

function Header({ auth }) {
  const { t } = useTranslation("header");
  const { global: { user } } = useAppContext();
  const mobile = useMedia("(max-width: 635px)");
  const [menu, toggleMenu] = useModal("(max-width: 635px)");

  // console.log({ auth });
  // if (!auth) return null;

  return (
    <header className="header container-fluid">
      <Link to="/" className="header__logo" data-mobile={mobile}>
        <img src={Logo} alt="" className="header__logo-image" />
      </Link>
      <nav className="header__nav container-fluid">
        {mobile ? (
          <button type="button" className="header__burger" onClick={toggleMenu}>
            <div className="header__burger-icon" data-active={menu}>
              <span />
              <span />
              <span />
            </div>
          </button>
        ) : null}
        <ul
          className={mobile ? "header__menu" : "header__list container-fluid"}
          data-active={menu}
          onClick={mobile ? toggleMenu : undefined}
        >
          <li className="col header__list-item header__list-item--profile">
            <NavLink
              to="/profile"
              className="header__link"
            >
              <div className="row ">
                <div className="col-2 ">
                  <img src={user.profileImage} alt="" className="header__profile" />
                </div>
                <div className="col-6 header__content-text">
                  <p className="header__text">Horacio Montoya Villarreal</p>
                  <p className="header__text header__text--sub">horacio.montoya @solana.com.mx</p>
                </div>
                <div className="col-1 align-self-center">
                  <img src={Arrow} alt="" className="header__arrow" />
                </div>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
