import './global.scss'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import CocinaContainer from '../src/containers/CocinaContainer'
import CartaContainer from './containers/CartaContainer';

//manejar rutas layout, container

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomeContainer}></Route>
        <Route path='/carta' component={CartaContainer}></Route>
        <Route path='/cocina' component={CocinaContainer}></Route>
      </Switch>
    </Router>
  );
}

export default App;
