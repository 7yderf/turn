import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppContext } from "@context";
import { useMedia, useModal } from "@hooks";

import "@stylesComponents/Header.scss";

// import Logo from "@icons/logo.svg";
// import LogoSmall from "@icons/logo-small.svg";

function Header({ auth }) {
  const { t } = useTranslation("header");
  const { global: { user } } = useAppContext();
  const mobile = useMedia("(max-width: 635px)");
  const [menu, toggleMenu] = useModal("(max-width: 635px)");

  // console.log({ auth });
  // if (!auth) return null;

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        {/* <img src={mobile ? LogoSmall : Logo} alt="" className="header__logo-image" /> */}
      </Link>
      <nav className="header__nav">
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
          className={mobile ? "header__menu" : "header__list"}
          data-active={menu}
          onClick={mobile ? toggleMenu : undefined}
        >
          <li className="header__list-item">
            <NavLink to="/" className={({ isActive }) => (`header__link${isActive ? " header__link--active" : ""}`)}>
              {t("account")}
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to="/funds" className={({ isActive }) => (`header__link${isActive ? " header__link--active" : ""}`)}>
              {t("funds")}
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to="/platform" className={({ isActive }) => (`header__link${isActive ? " header__link--active" : ""}`)}>
              {t("platform")}
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink
              to="/profile"
              className={({ isActive }) => (`header__link header__link--profile${isActive ? " header__link--active" : ""}`)}
            >
              <img src={user.profileImage} alt={`${user.firstName} ${user.lastName}`} className="header__profile" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
