import React, { useState } from 'react'
import Button from './Button';
import lessIcon from '../images/less-icon.svg'
import plusIcon from '../images/plus-icon.svg'
import './CardProduct.scss';

function CardProduct({ name, image }) {
  const [activeProduct, setActiveProduct] = useState(false);

  function handleActiveProduct() {
    setActiveProduct(!activeProduct)
  }

  return (
    <li className='card'>
      <img src={image} alt="" className='card-image' />
      <p className='card-name'>{name}</p>
      {
        activeProduct ?
          <>
            <Button noIcon className='add' onclick={handleActiveProduct}>
              Remover
              </Button>
            <div className='card-count'>
              <Button className='less-button' noIcon>
                <span className='card-count-less-icon'>
                  <img src={lessIcon} alt="" />
                </span>
              </Button>
              <p className='card-count-value' >1</p>
              <Button className='more-button' noIcon>
                <span className='card-count-more-icon'>
                  <img src={plusIcon} alt="" />
                </span>
              </Button>
            </div>
          </>
          :
          <Button noIcon className='add' onclick={handleActiveProduct}>
            Agregar
          </Button>
      }
    </li>
  )
}

export default CardProduct

