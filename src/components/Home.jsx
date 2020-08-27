import React from 'react';
import { Link } from 'react-router-dom'
import Button from './Button'
import './Home.scss'
import buergerHome from '../images/Burger-home.png';
import iconWaiter from '../images/waiter.svg'
import chef from '../images/chef.svg'

function Home() {
  return (
    <div className='container-home'>
      <figure className='logo'>
        <img src={buergerHome} alt="logo-burger" />
      </figure>
      <div className='welcome-app'>
        <h1 className='title'>Burger Queen</h1>
        <h2 className='subtitle'>La vida sabe mejor con extra <span>Queso!</span></h2>
        <Link to='/carta'>
          <Button icon={iconWaiter} className='btn-waiter'>
            Meserx
        </Button>
        </Link>
        <Link to='/cocina'>
          <Button icon={chef} className='btn-chef'>
            Cocina
        </Button>
        </Link>
      </div>
    </div>
  )
}


export default Home;

