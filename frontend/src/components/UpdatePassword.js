import React, { Fragment, useState, useEffect } from "react";

import MetaData from "./layout/MetaData";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword, clearErrors } from "../actions/userActions";
import { UPDATE_PASSWORD_RESET } from "../constants/userConstants";
import Navbar from "./Navbar";

const UpdatePassword = ({ history }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, isUpdated, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Password updated successfully");

      history.push("/sign-up");

      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [dispatch, alert, error, history, isUpdated]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("oldPassword", oldPassword);
    formData.set("password", password);

    dispatch(updatePassword(formData));
  };

  return (
    <div>
      <Fragment>
        <MetaData title={"Login"} />
        <Navbar />

        <div className="outer">
          <div className="inner">
            <form onSubmit={submitHandler}>
              <h3>Update Password</h3>

              <div className="form-group">
                <label>Old Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter old password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>

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

              <button
                type="submit"
                className="btn btn-dark btn-lg btn-block"
                disabled={loading ? true : false}
              >
                Update Password
              </button>
              {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                  </p> */}
            </form>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default UpdatePassword;
