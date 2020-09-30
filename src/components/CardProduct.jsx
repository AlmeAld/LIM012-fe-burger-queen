import React from "react";
import { PrimaryButton, TertiaryButton } from "./Button";
import "./CardProduct.scss";
import lessIcon from "../images/less-icon.svg";
import plusIcon from "../images/plus-icon.svg";

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

export default CardProduct;
