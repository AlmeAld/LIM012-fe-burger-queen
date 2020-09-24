import React, { useState, useEffect } from "react";
import "./OrdersServed.scss";
import { firebase } from "../../src/configFirebase";

function OrdersServed() {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("orders")
      .where("status", "==", "served")
      .onSnapshot((doc) => {
        const dataArr = doc.docs.map((order) => ({
          id: order.id,
          ...order.data(),
        }));
        setStatus(dataArr);
      });
  }, []);

  function pendingTime(initDate, endDate) {
    const initHour = initDate.toDate();
    const endHour = endDate.toDate();
    return `${endHour.getMinutes() - initHour.getMinutes()}`;
  }

  return (
    <div className="content-ordersServed">
      <p className="content-ordersServed-title">Pedidos Servidos</p>
      {status.map((orderlist) => (
        <div key={orderlist.id} className="content-pedido">
          <div className="card-header">
            <span>{orderlist.name}</span>
            <span>Mesa: {orderlist.usermesa} </span>
            <span>
              Hace: {pendingTime(orderlist.initDate, orderlist.endDate)} min.
            </span>
          </div>
          <div className="card-main">
            {orderlist.order.map((listproduct) => (
              <div key={listproduct.id} className="card-main-list">
                <span>{listproduct.quantity}</span>
                <span>{listproduct.nameProduct}</span>
              </div>
            ))}
            <button>¡Listo para servir!</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrdersServed;
