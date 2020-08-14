import React from 'react'
import './Button.scss'

function Button({icon, text, classname}){
  return(
    <button className={classname}>
      <img src={icon} alt="icono imagen"  />
      <p className='text-btn'>{text}</p>   
    </button>
  )
}


export default Button