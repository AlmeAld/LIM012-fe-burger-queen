import React, { useState } from "react";
import products from "../db.js";
import Layout from "../components/layout/Layout";
import CardWrapper from "../components/CardWrapper";
import Comanda from "../components/Comanda";
import "./CartaContainer.scss";
import Modal from "../components/Modal";

function CartaContainer() {
  const [state, setState] = useState({
    categories: products.categories,
    foods: products.food,
    selectedFoods: [],
    total: 0,
  });

  const [isOpen, setIsOpen] = useState(false);

  function resetOrders() {
    let flatArrayIds = Object.entries(state.categories)
      .map(([key, value]) => value.list)
      .flatMap((list) => list);
    let arrFoods = flatArrayIds.map((id) => state.foods[id]);
    //allFoods = obj d obj y actualizar foods
    let allFoods = arrFoods.map((item) => ({
      ...item,
      count: 0,
      precioTotal: 0,
    }));
    console.log({ allFoods });
    setState({
      // categories: products.categories,
      ...state,
      foods: allFoods,
      selectedFoods: [],
      total: 0,
    });
  }

  function addItemToCart(idItem) {
    let flatArrayIds = Object.entries(state.categories)
      .map(([key, value]) => value.list)
      .flatMap((list) => list);
    let arrFoods = flatArrayIds.map((id) => state.foods[id]);
    let selectedItem = arrFoods.find((item) => item.id === idItem);

    selectedItem.count = 1;
    selectedItem.precioTotal = selectedItem.precio;
    setState({
      ...state,
      selectedFoods: [...state.selectedFoods, selectedItem],
    });
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
      categories: { ...state.categories },
      selectedFoods: newArr,
    });
  }

  return (
    <Layout title="Carta" className="layout-carta" setIsOpen={setIsOpen}>
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
          <Comanda data={state.selectedFoods} resetOrders={resetOrders} />
        </div>
        {isOpen ? <Modal setIsOpen={setIsOpen} /> : null}
      </div>
    </Layout>
  );
}

export default CartaContainer;
