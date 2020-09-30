import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { PrimaryButtonOrder } from "./Button";
import "./Home.scss";
import { signIn } from "../API/firestore";
import buergerHome from "../images/burgerHome.png";
import mail from "../images/mail-icon.svg";
import pass from "../images/password-icon.svg";

function Home() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [select, setSelect] = useState("");

  function handleInputEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function handleInputPassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  function handleSelect(e) {
    e.preventDefault();
    setSelect(e.target.value);
  }

  function handleForm(e) {
    e.preventDefault();
    signIn(email, password, history);
  }

  return (
    <div className="container-home">
      <figure className="logo">
        <img src={buergerHome} alt="logo-burger" />
      </figure>
      <div className="welcome-app">
        <h1 className="title">Burger Queen</h1>
        <h2 className="subtitle">
          La vida sabe mejor con extra <span>Queso!</span>
        </h2>
        <div className="login">
          <form action="" className="form" onChange={handleSelect}>
            <select className="select" required>
              <option value="Cocina">Cocina</option>
              <option value="Meserx">Meserx</option>
            </select>
            <div className="div-input">
              <img src={mail} alt="" />
              <input
                className="form-input"
                type="email"
                placeholder="email"
                name="email"
                onChange={handleInputEmail}
              />
            </div>
            <div className="div-input">
              <img src={pass} alt="" />
              <input
                className="form-input"
                type="password"
                placeholder="password"
                name="password"
                onChange={handleInputPassword}
              />
            </div>
            <div className="div-btn">
              <PrimaryButtonOrder onClick={handleForm}>
                Iniciar sesion
              </PrimaryButtonOrder>
            </div>
          </form>
        </div>
        {/* <Link to="/carta">
          <PrimaryButtonIcon icon={iconWaiter}>Meserx</PrimaryButtonIcon>
        </Link>
        <Link to="/cocina">
          <PrimaryButtonIcon icon={chef}>Cocina</PrimaryButtonIcon>
        </Link> */}
      </div>
    </div>
  );
}

export default Home;
