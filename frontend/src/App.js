import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import { useEffect } from "react";
import { loadUser } from "./actions/userActions";
import store from "./store";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import UpdatePassword from "./components/UpdatePassword";
import NewPassword from "./components/NewPassword";
import Home from "./components/Home";
// import ProtectedRoute from "./components/ProtectedRoute";

import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <div className="">
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/password/forgot" component={ForgotPassword} exact />
          <Route path="/password/update" component={UpdatePassword} exact />
          <Route path="/password/reset/:token" component={NewPassword} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
