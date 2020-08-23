import React from 'react'
import { Link } from 'react-router-dom'
import homeIcon from '../images/home.svg'
import fuenteIcon from '../images/fuente-icon.svg'
import searchIcon from '../images/search-icon.svg'
import './Nav.scss'

function Nav({title}) {
  return (
    <nav className='nav'>
      <h1 className='title'>{title}</h1>
      <form action="">
        <input type="text" />
        <img src={searchIcon} alt="" />
      </form>
      <Link to='/'>
        <img src={homeIcon} alt="" />
      </Link>
      <img src={fuenteIcon} alt="" />
      {/* <div className='notification'>
        <p>2</p>
      </div> */}
    </nav>
  )
}

export default Nav