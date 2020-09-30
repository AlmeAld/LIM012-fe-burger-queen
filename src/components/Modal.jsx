import React, { useState, useEffect } from "react";
import "./Modal.scss";
import check from "../images/check.svg";
import close from "../images/close-icon.svg";
import ReactDom from "react-dom";
import { getServedOrders } from "../API/firestore";
import CardReadyToServe from "./CardReadyToServe";

function Modal({ setIsOpen }) {
  const [readyToServe, setReadyToServe] = useState([]);

  useEffect(() => {
    getServedOrders(setReadyToServe);
  }, []);

  return ReactDom.createPortal(
    <div className="modal-content">
      <div className="modal-content">
        <div className="modal-content-header">
          <h1>¡Listo!</h1>
          <img src={check} alt="" />
          <button type="button" onClick={() => setIsOpen(false)}>
            <img src={close} alt="" />
          </button>
        </div>
        {readyToServe.map((list) => (
          <CardReadyToServe
            key={list.id}
            name={list.username}
            mesa={list.usermesa}
            order={list.order}
            endDate={list.endDate}
          />
        ))}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

// ReactDom -> createPortal(a,b)
// a => el componente para mostrar
// b => donde - en que nodo de HTML

export default Modal;
