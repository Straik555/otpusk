//Core
import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';

//Utils
import {routes} from "./_routes";

//Auth
import Login from "./pages/Auth/Login";

//User Routes
import UserRoutes from "./components/UserRoutes";

//Page
import Home from "./pages/Home";
import UserProfile from "./pages/User";

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
                      <UserRoutes exact path={routes.home} component={ () => <Home />} />
                      <UserRoutes exact path={routes.user} component={ () => <UserProfile />} />
                      <Route exact path={routes.login} component={ () => <Login />} />
                  </Switch>
          }

      </div>
  )
}

export default App;