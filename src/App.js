import './global.scss'
import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import Carta from '../src/components/Carta'
import Cocina from '../src/components/Cocina'

//manejar rutas layout, container

function App() {
  return (
    <Router>
      <Route path='/' exact component={HomeContainer}></Route>
      <Route path='/carta' component={Carta}></Route>
      <Route path='/cocina' component={Cocina}></Route>
    </Router>
  );
}

export default App;
