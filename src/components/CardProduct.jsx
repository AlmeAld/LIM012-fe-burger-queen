import React from 'react'
import Button from './Button';
import './CardProduct.scss';
import lessIcon from '../images/less-icon.svg'
import plusIcon from '../images/plus-icon.svg'

function CardProduct({ id, name, count, image, addItemToCart, addCount, decrementCount, removeCount }) {
  function remove(id) {
    removeCount(id)
  }

  function decrement(id) {
    decrementCount(id)
  }

  function increment(id) {
    addItemToCart(id)
  }


  return (
    <li className='card'>
      <img src={image} alt="" className='card-image' />
      <p className='card-name'>{name}</p>
      {
        count ?
          <>
            <Button noIcon className='add' onClick={() => remove(id)}>
              Remover
              </Button>
            <div className='card-count'>
              <Button className='less-button' noIcon onClick={() => decrement(id)}>
                {/* <span className='card-count-less-icon'> */}
                <img src={lessIcon} alt="" className='card-count-less-icon' />
                {/* </span> */}
              </Button>
              <p className='card-count-value' >{count}</p>
              <Button className='more-button' noIcon onClick={() => addCount(id)}>
                {/* <span className='card-count-more-icon'> */}
                <img src={plusIcon} alt="" className='card-count-more-icon' />
                {/* </span> */}
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

