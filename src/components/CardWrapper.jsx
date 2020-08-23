import React from 'react'
import products from '../db.js'
import './CardWrapper.scss'
import CardProduct from './CardProduct'

function CardWrapper({ typeMenu }) {

  const filterProducts = products.filter((item) => {
    return item.type === typeMenu
  })

  const listProducts = filterProducts.map((item) =>
    <CardProduct key={item.id} {...item} />
  );

  return (
    <div className='menu-card-wrapper'>
      <h1 className='menu-card-title'>{typeMenu}</h1>
      <ul className="menu-card-list">
        {listProducts}
      </ul>
    </div>
  )
}

export default CardWrapper

// onclick = {() => setProduct([console.log(el.name, el.precio)])}