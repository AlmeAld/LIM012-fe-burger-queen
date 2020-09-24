import React from "react";
import Layout from "../components/layout/Layout";
import cutlery from "../images/cutlery.svg";
import PendingOrders from "../components/PendingOrders";
import OrdersServed from "../components/OrdersServed";
import "./CocinaContainer.scss";

function Cocinacontainer() {
  return (
    <Layout title="Cocina">
      <header className="content-header">
        <img src={cutlery} alt="icono de cubiertos" />
        <p className="content-header-title">
          En esta cocina pasan cosas Mágicas
        </p>
        <img src={cutlery} alt="icono de cubiertos" />
      </header>
      <main className="content-orders">
        <PendingOrders />
        <OrdersServed />
      </main>
    </Layout>
  );
}

export default Cocinacontainer;
