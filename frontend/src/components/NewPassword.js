import React, { Fragment, useState, useEffect } from "react";

import MetaData from "./layout/MetaData";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, clearErrors } from "../actions/userActions";
import Navbar from "./Navbar";

const NewPassword = ({ history, match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, success } = useSelector((state) => state.forgotPassword);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Password updated successfully");
      history.push("/sign-in");
    }
  }, [dispatch, alert, error, success, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("password", password);
    formData.set("confirmPassword", confirmPassword);

    dispatch(resetPassword(match.params.token, formData));
  };

  return (
    <div>
      <Fragment>
        {/* {loading ? (
          <Loader />
        ) : ( */}
        <Fragment>
          <MetaData title={"Login"} />
          {/* <Navbar /> */}

          <div className="outer">
            <div className="inner">
              <form onSubmit={submitHandler}>
                <h3>New Password</h3>

                <div className="form-group">
                  <label>New password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Confirm password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-dark btn-lg btn-block"
                  //   disabled={loading ? true : false}
                >
                  Set Password
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
    </div>
  );
};

export default NewPassword;
