import React from 'react';
import Menu from './components/Menu';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Doc from './components/Doc';
import Tuto from './components/Tuto';
import Community from './components/Community';
import ErrorPage from './components/ErrorPage';
import './App.css';



class App extends React.Component {

  constructor(props) {
    super(props);
  }
  state = {
    statutPage:{
      Docs:false,
      Tuto:true,
      Community:false
    }
  }


  render() {
    return (
      //  Switch composent qui test chaque route si la route n'existe pas -> pade erreur 
      // Redirect : permet de faire un redirection si par ex la page est en cours de construction
      /**<Route path="/tuto" render={() => (
            this.state.statutPage.Tuto ? (<Redirect to="/"/>):(<Tuto/>)
           )} /> */


      <BrowserRouter>
        <Menu />

        <Switch>
          <Route exact path="/" component={Doc} />
          <Route path="/tuto" component={Tuto} /> 
          

          <Route strict path="/community" component={Community} />
          <Route component={ErrorPage} />
        </Switch>



      </BrowserRouter>
    );
  }
}

export default App;