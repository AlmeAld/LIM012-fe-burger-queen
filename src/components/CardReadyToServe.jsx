import React from "react";
import "./cardReadyToServe.scss";
import PropTypes from "prop-types";

function CardReadyToServe({ name, mesa, order, endDate }) {
  const time = new Date();
  function pendingTime(endDate, date) {
    const currentTime = date.getTime();
    const endHour = endDate.toDate().getTime();
    const minutes = Math.floor(((currentTime - endHour) / (1000 * 60)) % 60);
    const hour = Math.floor(((currentTime - endHour) / (1000 * 60 * 60)) % 24);
    return `${hour}hrs ${minutes}min`;
  }

  return (
    <div className="card-container">
      <div className="card-container-header">
        <p>
          <strong>{name}</strong>
        </p>
        <p>
          <strong>Mesa: {mesa}</strong>
        </p>
        <p>
          <strong>Hace: {pendingTime(endDate, time)}</strong>
        </p>
        <input type="button" value="entregado" />
      </div>
      <div className="card-container-main">
        {order.map((list) => (
          <div key={list.id} className="card-container-main-list">
            <span>{list.quantity}</span>
            <span>{list.nameProduct}</span>
            <input type="checkbox" />
          </div>
        ))}
      </div>
    </div>
  );
}

CardReadyToServe.propTypes = {
  name: PropTypes.string.isRequired,
  mesa: PropTypes.string.isRequired,
  order: PropTypes.array.isRequired,
  endDate: PropTypes.object,
};

export default CardReadyToServe;
