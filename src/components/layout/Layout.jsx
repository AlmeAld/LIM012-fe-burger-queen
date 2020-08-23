import React from 'react'
import Nav from '../Nav'
import './Layout.scss'

function Layout({ children, title }) {
  return (
    <div className='layout'>
      <Nav title={title} />
      <div className='content'>
        {children}
      </div>
    </div>
  )
}

export default Layout