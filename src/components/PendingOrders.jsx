import React, { useState, useEffect } from "react";
import "./PendingOrders.scss";
import { getPendingOrders, updateStatus } from "../API/firestore";
import { PrimaryButtonOrder } from "./Button";

function PendingOrders() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPendingOrders(setData);
  }, []);

  function time(fecha) {
    if (!fecha) return;
    const date = fecha.toDate();
    return `${date.getHours()}:${date.getMinutes()}`;
    // console.log(
    //   date.toLocaleTimeString("es-ES", {
    //     hour12: false,
    //     hour: "numeric",
    //     minute: "numeric",
    //   })
    // );
  }

  function statusOrders(id) {
    updateStatus(id);
  }

  return (
    <div className="content-pendingOrders">
      <p className="content-pendingOrders-title">Pedidos Pendientes</p>
      {data.map((orderlist) => (
        <div key={orderlist.id} className="content-pedido">
          <div className="card-header">
            <span>
              <strong>{orderlist.username}</strong>
            </span>
            <span>
              <strong>Mesa: {orderlist.usermesa}</strong>
            </span>
            <span>
              <strong>Hora: {time(orderlist.initDate)}</strong>
            </span>
          </div>
          <div className="card-main">
            <div className="card-main-container">
              {orderlist.order.map((listProduct) => (
                <div key={listProduct.id} className="card-main-container-list">
                  <span>{listProduct.quantity}</span>
                  <span>{listProduct.nameProduct}</span>
                </div>
              ))}
            </div>
            <PrimaryButtonOrder onClick={() => statusOrders(orderlist.id)}>
              ¡Listo para servir!
            </PrimaryButtonOrder>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PendingOrders;
