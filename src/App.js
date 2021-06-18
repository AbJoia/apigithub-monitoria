import React from 'react';
import Home from './pages/Home'
import Repositorios from './pages/Repositorios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/repos/:login">
          <Repositorios/>
        </Route>
        <Route path="/">      
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
