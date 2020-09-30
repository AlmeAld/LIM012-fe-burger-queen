import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOQaRSk9f7EAM3X83hoMpfB5YxsgUsM7g",
  authDomain: "burger-queen-a8771.firebaseapp.com",
  databaseURL: "https://burger-queen-a8771.firebaseio.com",
  projectId: "burger-queen-a8771",
  storageBucket: "burger-queen-a8771.appspot.com",
  messagingSenderId: "588456145562",
  appId: "1:588456145562:web:f41359a35210ce76eb2523",
  measurementId: "G-MN0X9KJB9J",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export { firebase };
