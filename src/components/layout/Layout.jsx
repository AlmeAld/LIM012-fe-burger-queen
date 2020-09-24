import React from "react";
import Nav from "../Nav";
import "./Layout.scss";

function Layout({ children, title, className }) {
  return (
    <div className="layout">
      <Nav title={title} />
      <div className={className}>{children}</div>
    </div>
  );
}

export default Layout;
