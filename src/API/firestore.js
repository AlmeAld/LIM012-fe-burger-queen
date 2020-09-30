import { firebase } from "../configFirebase";

const signIn = (email, password, history) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => history.push("/carta"));
};

const createCollection = (order, name, mesa, time, resetOrders) => {
  firebase
    .firestore()
    .collection("orders")
    .add({
      order,
      username: name,
      usermesa: mesa,
      initDate: time,
      endDate: "",
      status: "pending",
    })
    .then(() => resetOrders())
    .catch((error) => console.log(`error en enviar pedido ${error}`));
};

const getPendingOrders = (callback) => {
  firebase
    .firestore()
    .collection("orders")
    .where("status", "==", "pending")
    .orderBy("initDate", "desc")
    .onSnapshot((doc) => {
      const getOrders = doc.docs.map((order) => ({
        id: order.id,
        ...order.data(),
      }));

      callback(getOrders);
    });
};

const getServedOrders = (callback) => {
  firebase
    .firestore()
    .collection("orders")
    .where("status", "==", "served")
    .orderBy("endDate", "desc")
    .onSnapshot((doc) => {
      const dataArr = doc.docs.map((order) => ({
        id: order.id,
        ...order.data(),
      }));
      callback(dataArr);
    });
};

const updateStatus = (id) => {
  firebase.firestore().collection("orders").doc(id).update({
    status: "served",
    endDate: new Date(),
  });
};

export {
  getPendingOrders,
  updateStatus,
  getServedOrders,
  createCollection,
  signIn,
};
