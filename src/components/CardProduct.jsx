import React from "react";
import { PrimaryButton, TertiaryButton } from "./Button";
import "./CardProduct.scss";
import lessIcon from "../images/less-icon.svg";
import plusIcon from "../images/plus-icon.svg";
import PropTypes from "prop-types";

function CardProduct({
  id,
  name,
  count,
  image,
  addItemToCart,
  addCount,
  decrementCount,
  removeCount,
}) {
  function remove(id) {
    removeCount(id);
  }

  function decrement(id) {
    decrementCount(id);
  }

  function increment(id) {
    addItemToCart(id);
  }

  return (
    <li className="card">
      <img src={image} alt="" className="card-image" />
      <p className="card-name">{name}</p>
      {count ? (
        <>
          <PrimaryButton onClick={() => remove(id)}>Remover</PrimaryButton>
          <div className="card-count">
            <TertiaryButton onClick={() => decrement(id)}>
              <img src={lessIcon} alt="" className="card-count-less-icon" />
            </TertiaryButton>
            <p className="card-count-value">{count}</p>
            <TertiaryButton onClick={() => addCount(id)}>
              <img src={plusIcon} alt="" className="card-count-more-icon" />
            </TertiaryButton>
          </div>
        </>
      ) : (
        // <Button noIcon className='add' onClick={increment}>
        <PrimaryButton className="add" onClick={() => increment(id)}>
          Agregar
        </PrimaryButton>
      )}
    </li>
  );
}

CardProduct.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  addCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
  removeCount: PropTypes.func.isRequired,
};

export default CardProduct;
