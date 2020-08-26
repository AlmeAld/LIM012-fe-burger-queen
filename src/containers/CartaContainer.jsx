import React, { useState } from 'react'
import products from '../db.js'
import Layout from '../components/layout/Layout'
import CardWrapper from '../components/CardWrapper'
import Comanda from '../components/Comanda'
import './CartaContainer.scss'



function CartaContainer() {

  const [state, setState] = useState({
    categories: products.categories,
    foods: products.food,
    selectedFoods: [],
    total: 0
  })


  //
  function addItemToCart(idItem) {
    //1) convertir el objeto'categories' en array(object.entries)
    //2)tengo 4 arrays con key:{value} iterando devuelve 4 arrays list
    //3)unir los 4 arrays en uno solo (flatMap)
    let flatArrayIds = Object.entries(state.categories).map(([key, value]) => value.list).flatMap(list => list)
    //4) flatArrayIds=arrays de las listId, iterar para obtener el {valor} de foods segun su id
    let arrFoods = flatArrayIds.map(id => state.foods[id])
    //5) de arrFoods necesito el primer objeto que coincida con (id del item sea = al idem que le estoy pasando)
    let selectedItem = arrFoods.find((item) => item.id === idItem);

    let existItem = state.selectedFoods.find((item) => item.id === idItem)
    //6) el valor de existItem es undefined porque el estado actual de selectedFoods es []
    if (existItem) {
      // si no existe => agregar el  item a selectedFoods(actualizar estado)
      setState({ ...state, categories: { ...state.categories } })
    } else {
      // si existe => igular el count del item a 1. actuaizar el estado de selectedFoods con el estado anterior ma selecteditem
      selectedItem.count = 1
      setState({ ...state, selectedFoods: [...state.selectedFoods, selectedItem] })
    }
  }



  function addCount(idItem) {
    let flatArrayIds = Object.entries(state.categories).map(([key, value]) => value.list).flatMap(list => list)


    let arrFoods = flatArrayIds.map(id => state.foods[id])

    let selectedItem = arrFoods.find((item) => item.id === idItem);
    //increntar en count + 1 del objeto que me devuelva selectedItem y actualizar el estado
    selectedItem.count += 1;
    setState({ ...state, categories: { ...state.categories } })

  }

  function decrementCount(idItem) {
    let flatArrayIds = Object.entries(state.categories).map(([key, value]) => value.list).flatMap(x => x)


    let arrFoods = flatArrayIds.map(id => state.foods[id])

    let selectedItem = arrFoods.find((item) => item.id === idItem);

    if (selectedItem.count === 1) {
      selectedItem.count = 0
      let newArr = state.selectedFoods.filter((item) => idItem !== item.id)
      setState({ ...state, selectedFoods: newArr, categories: { ...state.categories } })
    } else {
      selectedItem.count -= 1;
      setState({ ...state, categories: { ...state.categories } })
    }
  }

  function removeCount(idItem) {
    let flatArrayIds = Object.entries(state.categories).map(([key, value]) => value.list).flatMap(x => x)


    let arrFoods = flatArrayIds.map(id => state.foods[id])

    let selectedItem = arrFoods.find((item) => item.id === idItem);
    // si el count es mayor que 1, regredar el count seletedItem a 0
    if (selectedItem.count > 1)
      selectedItem.count = 0
    let newArr = state.selectedFoods.filter((item) => idItem !== item.id)
    setState({ ...state, selectedFoods: newArr, categories: { ...state.categories } })
  }


  return (
    <Layout title='Carta'>
      <div className='content-cardWrapper'>
        {
          Object.entries(state.categories).map(([key, value]) =>
            <CardWrapper addItemToCart={addItemToCart} addCount={addCount} decrementCount={decrementCount} removeCount={removeCount} key={key} title={value.name} data={value.list} />
          )
        }
      </div>
      <div className='container-comanda'>
        <Comanda data={state.selectedFoods} />
      </div>

    </Layout>
  )
}

export default CartaContainer
