import React, { Fragment, useState, useEffect } from "react";

import MetaData from "./layout/MetaData";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword, clearErrors } from "../actions/userActions";
import Navbar from "./Navbar";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, loading, message } = useSelector(
    (state) => state.forgotPassword
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert.success(message);
    }
  }, [dispatch, alert, error, message]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("email", email);

    dispatch(forgotPassword(formData));
  };

  return (
    <div>
      <Fragment>
        <MetaData title={"Forgot Password"} />
        <Fragment>
          {/* {loading ? (
            <Loader />
          ) : ( */}
          <Fragment>
            <MetaData title={"Login"} />
            <Navbar />

            <div className="outer">
              <div className="inner">
                <form onSubmit={submitHandler}>
                  <h3>Forgot Password</h3>

                  <div className="form-group">
                    <label>Enter Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                  </div> */}

                  <button
                    type="submit"
                    className="btn btn-dark btn-lg btn-block"
                    disabled={loading ? true : false}
                  >
                    Send Email
                  </button>
                  {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                  </p> */}
                </form>
              </div>
            </div>
          </Fragment>
          {/* )} */}
        </Fragment>
      </Fragment>
    </div>
  );
};

export default ForgotPassword;
