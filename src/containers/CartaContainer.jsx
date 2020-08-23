import React from 'react'
import './CartaContainer.scss'
import Layout from '../components/layout/Layout'
import CardWrapper from '../components/CardWrapper'
import Comanda from '../components/Comanda'



function CartaContainer() {

  return (
    <Layout title='Carta'>
      <div className='content-cardWrapper'>
        <CardWrapper typeMenu='desayuno' />
        <CardWrapper typeMenu='menu' />
        <CardWrapper typeMenu='extras' />
        <CardWrapper typeMenu='bebidas' />
      </div>
      <div className='container-comanda'>
        <Comanda> </Comanda>
      </div>

    </Layout>
  )
}

export default CartaContainer
