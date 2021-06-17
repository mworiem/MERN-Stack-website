import React, { Component, Fragment, useState, useEffect } from "react";

import MetaData from "./layout/MetaData";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../actions/userActions";
import Navbar from "./Navbar";
import Login from "./Login";

import "../index.css";

const SignUp = ({ history }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = user;

  // const [avatar, setAvatar] = useState("");
  // const [avatarPreview, setAvatarPreview] = useState(
  //   "/images/default_avatar.jpg"
  // );

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/sign-in");
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("firstName", firstName);
    formData.set("lastName", lastName);
    formData.set("email", email);
    formData.set("password", password);

    dispatch(register(formData));
  };

  const onChange = (e) => {
    // if (e.target.name === "avatar") {
    //   const reader = new FileReader();

    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setAvatarPreview(reader.result);
    //       setAvatar(reader.result);
    //     }
    //   };

    //   reader.readAsDataURL(e.target.files[0]);
    // } else {
    setUser({ ...user, [e.target.name]: e.target.value });
    // }
  };

  return (
    <Fragment>
      {/* {user ? (
        <Login />
      ) : (
        <Fragment> */}
      <MetaData title={"Register User"} />

      <div className="outer">
        {/* <Navbar /> */}
        <div className="inner">
          <form onSubmit={submitHandler} encType="multipart/form-data">
            <h3>Register</h3>

            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="firstName"
                value={firstName}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lastName"
                value={lastName}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                k
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block"
              disabled={loading ? true : false}
            >
              Register
            </button>
            <p className="forgot-password text-right">
              Already registered <a href="/sign-in">log in?</a>
            </p>
          </form>
        </div>
      </div>
      {/* </Fragment>
      )} */}
    </Fragment>
  );
};

export default SignUp;
