import React from 'react';
import Menu from './components/Menu';
import { BrowserRouter, Route, Switch, Navigate } from 'react-router-dom';
import Doc from './components/Doc';
import Tuto from './components/Tuto';
import Community from './components/Community';
import ErrorPage from './components/ErrorPage';
import './App.css';
 
function App() {
  /**Switch composent qui test chaque route si la route n'existe pas -> pade erreur */
  return (
    <BrowserRouter>
         <Menu/>

      <Switch>
        <Route exact path="/" component={Doc} />
        <Route path="/tuto" component={Tuto} />
        <Route strict path="/community" component={Community} />
        <Route component={ErrorPage} /> 
      </Switch>
     
       

  </BrowserRouter>
  );
}
 
export default App; 