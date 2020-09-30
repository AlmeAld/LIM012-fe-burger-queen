import React, { useState } from "react";
import "./Comanda.scss";
import { PrimaryButtonOrder } from "./Button";
// import { firebase } from "../../src/configFirebase";
import { createCollection } from "../API/firestore";
import PropTypes from "prop-types";

function Comanda({ data, resetOrders }) {
  // console.log(data);
  // data.forEach(ele=>console.log(ele.name) )
  const [name, setName] = useState("");
  const [mesa, setMesa] = useState("");

  function handleUserName(e) {
    setName(e.target.value);
  }
  function handleUserMesa(e) {
    setMesa(e.target.value);
  }

  function sumaTotal() {
    let cuentaTotal = 0;
    data.forEach((element) => (cuentaTotal += parseInt(element.precioTotal)));
    return cuentaTotal;
  }

  const time = new Date();

  //funcion con firebase para enviar los datos capturados
  function sendOrder(e) {
    e.preventDefault();
    const order = data.map((ele) => ({
      id: ele.id,
      nameProduct: ele.name,
      quantity: ele.count,
    }));

    createCollection(order, name, mesa, time, resetOrders);
  }

  return (
    <div className="comanda">
      <h1 className="comanda-title">Comanda</h1>
      <input
        type="text"
        placeholder="Nombre"
        className="comanda-input-name"
        onChange={handleUserName}
        value={name}
      />
      <input
        type="number"
        placeholder="Mesa"
        className="comanda-input-mesa"
        onChange={handleUserMesa}
        value={mesa}
      />
      <div className="comanda-subtitle">
        <p className=" comanda-subtitle-detalle">Detalle de Pedido</p>
        <p className=" comanda-subtitle-precio">Precio</p>
      </div>
      <div className="comanda-content-pedido">
        <div className="comanda-content-pedido-detalle">
          {data ? (
            data.map(({ count, name, precioTotal, id }) => (
              <div
                key={id}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {count ? <p>{count}</p> : null}
                <p>{name}</p>
                <p>S/. {precioTotal}.00</p>
              </div>
            ))
          ) : (
            <span>No existe</span>
          )}
        </div>
      </div>
      <div className="comanda-total">
        <p className="comanda-total-text">total</p>
        <span className="comanda-total-count">S/. {sumaTotal()} </span>
      </div>
      <div className="comanda-button">
        <PrimaryButtonOrder>Cancelar</PrimaryButtonOrder>
        <PrimaryButtonOrder onClick={sendOrder}>
          Enviar Pedido
        </PrimaryButtonOrder>
      </div>
    </div>
  );
}

Comanda.propTypes = {
  data: PropTypes.array,
  resetOrders: PropTypes.func,
};

export default Comanda;
