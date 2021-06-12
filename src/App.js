//Core
import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';

//Utils
import {routes} from "./_routes";

//Auth
import Login from "./pages/Auth/Login";

//Page
import Home from "./pages/Home";

//Nav
import Header from "./components/Header";

//Style
import {ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Spinner from "./components/Spinner";


const App = ({isLoading}) => {

  return (
      <div className="container">
          <Header />
          <ToastContainer />
          {
              isLoading ? <Spinner /> :
                  <Switch>
                      <Route exact path="/" render={() => (<Redirect to={routes.home} />)} />
                      <Route exact path={routes.home} component={ () => <Home />} />
                      <Route exact path={routes.login} component={ () => <Login />} />
                  </Switch>
          }

      </div>
  )
}

export default App;