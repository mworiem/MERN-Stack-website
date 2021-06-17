import React, { Component, Fragment, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Loader from "./layout/Loader";
import MetaData from "./layout/MetaData";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../actions/userActions";
import "../index.css";
import Navbar from "./Navbar";

const Login = ({ history }) => {
  // console.log(props);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <MetaData title={"Login"} />
            {/* <Navbar /> */}

            <div className="outer">
              <div className="inner">
                <form onSubmit={submitHandler}>
                  <h3>Log in</h3>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark btn-lg btn-block"
                  >
                    Sign in
                  </button>
                  <p className="forgot-password text-right">
                    Forgot <Link to="/password/forgot">password?</Link>
                  </p>
                </form>
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
    </div>
  );
};

export default Login;
