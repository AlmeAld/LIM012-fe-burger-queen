import React from 'react'
import './Button.scss'

function Button({ icon, className, noIcon, onclick, children }) {


  return (
    <button className={className} onClick={onclick} >
      {
        noIcon
          ? null
          : <img className='icon-button' src={icon} alt="imagen" />
      }
      {children}
    </button>
  )
}


export default Button


