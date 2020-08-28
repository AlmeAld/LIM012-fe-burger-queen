import React, { useState } from 'react'
import './Comanda.scss'
import Button from './Button'
// import { firebase } from '../../src/configFirebase'


function Comanda({ data }) {
  console.log({ data })
  const [name, setName] = useState('')
  const [mesa, setMesa] = useState('')

  function handleUserName(e) {
    setName(e.target.value)
  }
  function handleUserMesa(e) {
    setMesa(e.target.value)
  }


  //funcion con firebase para enviar los datos capturados
  function sendOrder(e) {
    e.preventDefault()
    console.log('click enviar pedido', name, mesa)
    // firebase.firestore().collection("orders").add({
    //   id: '01',
    //   name: 'jugo de frutas',
    //   count: '2',
    //   time: '10min'
    // })
  }
  //{props.summary.reduce((acum, item) => acum + item.priceProduct * item.countProduct, 0)}

  return (
    <div className='comanda'>
      <h1 className='comanda-title'>Comanda</h1>
      <input type="text" placeholder='Nombre' className='comanda-input-name' onChange={handleUserName} value={name} />
      <input type="number" placeholder='Mesa' className='comanda-input-mesa' onChange={handleUserMesa} value={mesa} />
      <div className='comanda-subtitle'>
        <p className=' comanda-subtitle-detalle'>Detalle de Pedido</p>
        <p className=' comanda-subtitle-precio'>Precio</p>
      </div>
      <div className='comanda-content-pedido'>
        <div className='comanda-content-pedido-detalle'>
          {data ? data.map(({ count, name, precio, total, id }) =>
            <div key={id} style={{ display: 'flex', justifyContent: 'space-between' }}>

              {count ? <p>{count}</p> : null}
              <p>{name}</p>
              <p>S/. {precio}.00</p>
            </div>) :
            <span>No existe</span>
          }
        </div>
      </div>
      <div className='comanda-total'>
        <p className='comanda-total-text'>total</p>
        <span className='comanda-total-count'>S/. 0 </span>
      </div>
      <div className='comanda-button'>
        <Button noIcon className='sendOrder'>Cancelar</Button>
        <Button noIcon className='sendOrder' onClick={sendOrder}>Enviar Pedido</Button>
      </div>
    </div>
  )
}

export default Comanda