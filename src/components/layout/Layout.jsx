import React from "react";
// import Nav from "../Nav";
import "./Layout.scss";
import { Link } from "react-router-dom";
import { TertiaryButton } from "../Button";
import homeIcon from "../../images/home.svg";
import fuenteIcon from "../../images/fuente-icon.svg";
import searchIcon from "../../images/search-icon.svg";

function Layout({ children, title, className, setIsOpen }) {
  return (
    <div className="layout">
      <nav className="nav">
        <h1 className="title">{title}</h1>
        <form action="">
          <input type="text" />
          <img src={searchIcon} alt="" />
        </form>
        <Link to="/">
          <img src={homeIcon} alt="" />
        </Link>
        <TertiaryButton type="button" onClick={() => setIsOpen(true)}>
          <img src={fuenteIcon} alt="" />
        </TertiaryButton>
        {/* <div className='notification'>
        <p>2</p>
      </div> */}
      </nav>
      <div className={className}>{children}</div>
    </div>
  );
}

export default Layout;
