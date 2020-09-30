import React, { useState, useEffect } from "react";
import "./OrdersServed.scss";
import { getServedOrders } from "../API/firestore";
import { SecondaryButton } from "./Button";

function OrdersServed() {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    getServedOrders(setStatus);
  }, []);

  function pendingTime(initDate, endDate) {
    const initHour = initDate.toDate().getTime();
    const endHour = endDate.toDate().getTime();
    const minutes = Math.floor(((endHour - initHour) / (1000 * 60)) % 60);
    const hour = Math.floor(((endHour - initHour) / (1000 * 60 * 60)) % 24);
    return `${hour}hrs ${minutes}min`;
  }

  return (
    <div className="content-ordersServed">
      <p className="content-ordersServed-title">Pedidos Servidos</p>
      {status.map((orderlist) => (
        <div key={orderlist.id} className="content-pedido">
          <div className="card-header">
            <span>
              <strong>{orderlist.username}</strong>
            </span>
            <span>
              <strong>Mesa: {orderlist.usermesa}</strong>{" "}
            </span>
            <span>
              <strong>
                T/preparación:{" "}
                {pendingTime(orderlist.initDate, orderlist.endDate)}
              </strong>
            </span>
          </div>
          <div className="card-main">
            <div className="card-main-container">
              {orderlist.order.map((listproduct) => (
                <div key={listproduct.id} className="card-main-container-list">
                  <span>{listproduct.quantity}</span>
                  <span>{listproduct.nameProduct}</span>
                </div>
              ))}
            </div>
            <SecondaryButton>¡Listo para servir!</SecondaryButton>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrdersServed;
