import React, { useState, useEffect } from "react";
import "./PendingOrders.scss";
import { firebase } from "../../src/configFirebase";

function PendingOrders() {
  const [data, setData] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("orders")
      .where("status", "==", "pending")
      .onSnapshot((doc) => {
        const getOrders = doc.docs.map((order) => ({
          id: order.id,
          ...order.data(),
        }));

        setData(getOrders);
      });
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
    firebase.firestore().collection("orders").doc(id).update({
      status: "served",
      endDate: new Date(),
    });
  }

  return (
    <div className="content-pendingOrders">
      <p className="content-pendingOrders-title">Pedidos Pendientes</p>
      {data.map((orderlist) => (
        <div key={orderlist.id} className="content-pedido">
          <div className="card-header">
            <span>{orderlist.username}</span>
            <span>Mesa: {orderlist.usermesa}</span>
            <span>Hora: {time(orderlist.initDate)}</span>
          </div>
          <div className="card-main">
            {orderlist.order.map((listProduct) => (
              <div key={listProduct.id} className="card-main-list">
                <span>{listProduct.quantity}</span>
                <span>{listProduct.nameProduct}</span>
              </div>
            ))}
            <button onClick={() => statusOrders(orderlist.id)}>
              ¡Listo para servir!
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PendingOrders;
