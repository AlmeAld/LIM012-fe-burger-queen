import React, { useState, useEffect } from 'react'
import Button from './Button';
import lessIcon from '../images/less-icon.svg'
import plusIcon from '../images/plus-icon.svg'
import './CardProduct.scss';

function CardProduct({ id, name, count, image, addItemToCart, addCount, decrementCount }) {
  function remove() {
    console.log('remover')
  }

  function decrement(id) {
    decrementCount(id)
  }

  function increment(id) {
    // console.log('incrementar', id)
    addItemToCart(id)
  }


  return (
    <li className='card'>
      <img src={image} alt="" className='card-image' />
      <p className='card-name'>{name}</p>
      {
        count ?
          <>
            <Button noIcon className='add' onClick={remove}>
              Remover
              </Button>
            <div className='card-count'>
              <Button className='less-button' noIcon onClick={() => decrement(id)}>
                <span className='card-count-less-icon'>
                  <img src={lessIcon} alt="" />
                </span>
              </Button>
              <p className='card-count-value' >{count}</p>
              <Button className='more-button' noIcon onClick={() => addCount(id)}>
                <span className='card-count-more-icon'>
                  <img src={plusIcon} alt="" />
                </span>
              </Button>
            </div>
          </>
          :
          // <Button noIcon className='add' onClick={increment}>
          <Button noIcon className='add' onClick={() => increment(id)}>
            Agregar
          </Button>
      }
    </li>
  )
}

export default CardProduct

