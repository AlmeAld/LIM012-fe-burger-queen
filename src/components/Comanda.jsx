import React from 'react'
import './Comanda.scss'
import Button from './Button'



function Comanda() {
  return (
    <div className='comanda'>
      <h1 className='comanda-title'>Comanda</h1>
      <input type="text" placeholder='Nombre' className='comanda-input-name' />
      <input type="number" placeholder='Mesa' className='comanda-input-mesa' />
      <div className='comanda-subtitle'>
        <p className=' comanda-subtitle-detalle'>Detalle de Pedido</p>
        <p className=' comanda-subtitle-precio'>Precio</p>
      </div>
      <div className='comanda-content-pedido'>
      </div>
      <div className='comanda-button'>
        <Button noIcon className='sendOrder'>Cancelar</Button>
        <Button noIcon className='sendOrder'>Enviar Pedido</Button>
      </div>
    </div>
  )
}

export default Comanda