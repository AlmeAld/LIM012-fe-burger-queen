import React, { useState } from "react";
import products from "../db.js";
import Layout from "../components/layout/Layout";
import CardWrapper from "../components/CardWrapper";
import Comanda from "../components/Comanda";
import "./CartaContainer.scss";

function CartaContainer() {
  const [state, setState] = useState({
    categories: products.categories,
    foods: products.food,
    selectedFoods: [],
    total: 0,
  });

  function addItemToCart(idItem) {
    let flatArrayIds = Object.entries(state.categories)
      .map(([key, value]) => value.list)
      .flatMap((list) => list);
    let arrFoods = flatArrayIds.map((id) => state.foods[id]);
    let selectedItem = arrFoods.find((item) => item.id === idItem);

    let existItem = state.selectedFoods.find((item) => item.id === idItem);
    if (existItem) {
      setState({ ...state, categories: { ...state.categories } });
    } else {
      selectedItem.count = 1;
      selectedItem.precioTotal = selectedItem.precio;
      setState({
        ...state,
        selectedFoods: [...state.selectedFoods, selectedItem],
      });
    }
  }

  function addCount(idItem) {
    let flatArrayIds = Object.entries(state.categories)
      .map(([key, value]) => value.list)
      .flatMap((list) => list);

    let arrFoods = flatArrayIds.map((id) => state.foods[id]);

    let selectedItem = arrFoods.find((item) => item.id === idItem);
    selectedItem.count += 1;
    selectedItem.precioTotal = selectedItem.precio * selectedItem.count;
    setState({ ...state, categories: { ...state.categories } });
  }

  function decrementCount(idItem) {
    let flatArrayIds = Object.entries(state.categories)
      .map(([key, value]) => value.list)
      .flatMap((x) => x);

    let arrFoods = flatArrayIds.map((id) => state.foods[id]);

    let selectedItem = arrFoods.find((item) => item.id === idItem);

    if (selectedItem.count === 1) {
      selectedItem.count = 0;
      let newArr = state.selectedFoods.filter((item) => idItem !== item.id);
      setState({
        ...state,
        selectedFoods: newArr,
        categories: { ...state.categories },
      });
    } else {
      selectedItem.count -= 1;
      selectedItem.precioTotal = selectedItem.precio * selectedItem.count;
      setState({ ...state, categories: { ...state.categories } });
      // setState({ ...state, categories: { ...state.categories } })
      // debugger
    }
  }

  function removeCount(idItem) {
    let flatArrayIds = Object.entries(state.categories)
      .map(([key, value]) => value.list)
      .flatMap((x) => x);

    let arrFoods = flatArrayIds.map((id) => state.foods[id]);

    let selectedItem = arrFoods.find((item) => item.id === idItem);
    // console.log(selectedItem);
    // si el count es mayor que 1, regredar el count seletedItem a 0
    if (selectedItem.count >= 1) selectedItem.count = 0;
    let newArr = state.selectedFoods.filter((item) => idItem !== item.id);

    setState({
      ...state,
      selectedFoods: newArr,
      categories: { ...state.categories },
    });
  }

  return (
    <Layout title="Carta" className="layout-carta">
      <div className="content">
        <div className="content-cardWrapper">
          {Object.entries(state.categories).map(([key, value]) => (
            <CardWrapper
              addItemToCart={addItemToCart}
              addCount={addCount}
              decrementCount={decrementCount}
              removeCount={removeCount}
              key={key}
              title={value.name}
              data={value.list}
            />
          ))}
        </div>
        <div className="container-comanda">
          <Comanda data={state.selectedFoods} />
        </div>
      </div>
    </Layout>
  );
}

export default CartaContainer;
