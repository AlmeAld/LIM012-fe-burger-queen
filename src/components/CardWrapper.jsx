import React from 'react'
import products from '../db.js'
import './CardWrapper.scss'
import CardProduct from './CardProduct'

function CardWrapper({ title, data, addItemToCart, addCount, decrementCount, removeCount }) {


  return (
    <div className='menu-card-wrapper'>
      <h1 className='menu-card-title'>{title}</h1>
      <ul className="menu-card-list">
        {
          data.map(id =>
            <CardProduct addItemToCart={addItemToCart} addCount={addCount} decrementCount={decrementCount} removeCount={removeCount} key={id} {...products.food[id]} />
          )
        }
      </ul>
    </div>
  )
}

export default CardWrapper

// onclick = {() => setProduct([console.log(el.name, el.precio)])}