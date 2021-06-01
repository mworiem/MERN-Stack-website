import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

import { withRouter } from "react-router-dom";
import "../css/style.css";
import MainLogo from "../img/logo-3.PNG";
import Mern from "../img/mern-5.png";
import ReactPic from "../img/react.jpg";
import Node from "../img/node.jpg";
import Mongo from "../img/mongo.jpg";
import { logout } from "../actions/userActions";
import Login from "./Login";
import SignUp from "./SignUp";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully.");
  };

  // console.log(props);
  return (
    <div>
      <Fragment>
        {/* {user ? ( */}
        <body>
          <div className="navigation">
            <input
              type="checkbox"
              className="navigation__checkbox"
              id="navi-toggle"
            />

            <label htmlFor="navi-toggle" className="navigation__button">
              <span className="navigation__icon"> &nbsp; </span>
            </label>
            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
              <ul className="navigation__list">
                <li className="navigation__item">
                  <Link to="#Home" className="navigation__link">
                    Home
                  </Link>
                </li>
                <li className="navigation__item">
                  <Link to="#Portfolio" className="navigation__link">
                    My Portfolio
                  </Link>
                </li>
                <li className="navigation__item">
                  <Link to="Mern" className="navigation__link">
                    Mern stack
                  </Link>
                </li>
                <li className="navigation__item">
                  <Link to="#Summary" className="navigation__link">
                    Summary & Links
                  </Link>
                </li>

                <li className="navigation__item">
                  <Link
                    to="/sign-up"
                    className="navigation__link"
                    onClick={logoutHandler}
                  >
                    Logout
                  </Link>
                </li>
                <li className="navigation__item">
                  <Link
                    to="/password/update"
                    className="navigation__link"
                    // onClick={logoutHandler}
                  >
                    Update Password
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <header className="header">
            <div className="header__logo-box">
              <img src={MainLogo} alt="Logo" className="header__logo" />
            </div>

            <div className="header__text-box">
              <h1 className="heading-primary">
                <span className="heading-primary--main">Hello There</span>
                <span className="heading-primary--sub">
                  Welcome to my Portfolio website
                </span>
              </h1>
              {/* <!-- <Link to="#" className="btn btn--white btn--animated">Discover My Portfolio</Link> --> */}
            </div>
          </header>
          <main>
            <section id="Portfolio" className="section-about">
              <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">Portfolio</h2>
              </div>
              <div className="row">
                {/* <!-- <div className="col-1-of-2"> --> */}
                <div className="col-1-of-2">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Introduction
                  </h3>
                  <p className="paragraph">
                    My name is Yusufu Kibet Mworiem, a pasionate, curious and
                    enthusiastic Software Engineer with an interest in
                    Javascript MERN stack. After graduating with a degree in
                    Electrical and Telecommunication Enginnering, I developed an
                    interest in software Enginnering with the intention of
                    becoming a fullstack Javascript developer. With this goal in
                    mind, I set myself in the past one year on a path to
                    Javascript due to its popularity as the go-to language of
                    the web. The diverse fields of applications of Javascript
                    ranging from Frontend development, server-side development,
                    mobile and desktop application development as well as
                    machine learning places it as the language of the future
                    hence dedicating valuable time and resources in learning the
                    language became my greatest investment for my future and
                    that of the tech-world. I have developed various
                    applications both backend and frontend and I now feel really
                    confortable working with the many tools available in finding
                    various soluions to clients' needs. I have listed links to
                    my projects hosted in Github (including API) and live on
                    Heroku I am also well versed in software engineering and
                    lifecycles with Agile/Scrum, CI/CD and DevOps ecosystems and
                    basic Knowledge and skills in containerisation and
                    automation with Docker, AWS and Kubernetes
                  </p>
                </div>
                <div className="col-1-of-2">
                  <div className="composition">
                    <img
                      src={Mern}
                      alt="photo 1"
                      className="composition__photo composition__photo--p1"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                {/* <!-- <div className="col-1-of-2"> --> */}
                <div className="col-1-of-2">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Frontend
                  </h3>
                  <p className="paragraph">
                    I have used React JS for the UI development where I have
                    developed a Login, SignUp, Password forgot, password change
                    and Logout pages for authentication and authorisation of
                    users. I have also developed a pug template for client first
                    time login to display a welcome message and for also
                    displaying a token link to the client when the client hits
                    the password forgot button. I have used Redux , context API
                    and Hooks for global state management and to pull data from
                    the backend to frontend with the use of UseState, Actions,
                    Reducers and Dispatch. I have deep understanding and skills
                    in working with the React virtual DOM and DOM manipulation
                    as well as the overall architecture of a React application
                    in terms of design, development and optimisation. Below are
                    some of the technologies, techniques and tools I have
                    learned and worked with.
                  </p>
                </div>
                <div className="col-1-of-2">
                  <div className="composition">
                    <img
                      src={ReactPic}
                      alt="photo 2"
                      className="composition__photo composition__photo--p2"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                {/* <!-- <div className="col-1-of-2"> --> */}
                <div className="col-1-of-2">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Backend
                  </h3>
                  <p className="paragraph">
                    I developed a backend API that handles authentication and
                    Authorisation i.e Registration of new users, login,
                    logout,password change, password Reset and email handling.
                    In have used Node JS as a runtime environment, Express as a
                    Node JS framework, MongoDB database and Mongoose ORM. With
                    the idea of having the API work as an e-commerce
                    application, I have developed routes that can handle the
                    processing of products and client orders. This application
                    has followed strictly the MVC architecture of separating the
                    business logic from the application logic. I have used a
                    MongoDB as a database to store users, products and orders.
                    This data is then stored in the Mongo Cloud Atlas as well as
                    local Mongo Compass. At the base of the application is the
                    model which I have designed the DB schema using the mongoose
                    Object relational mapper(ORM) which maps the schema to the
                    database. The next level is the controller which handles the
                    logic of our application. Lastly at the routes level, I
                    handle user routes which will be connected to our
                    frontend.Below are the tecknologies, tools, proccesses and
                    best practices I incoperated in my API development
                  </p>
                </div>
                <div className="col-1-of-2">
                  <div className="composition">
                    <img
                      src={Node}
                      alt="photo 3"
                      className="composition__photo composition__photo--p3"
                    />
                  </div>
                </div>
              </div>
              */}
            </section>

            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">MERN STACK</h2>
            </div>
            <section className="section-features">
              <div className="row">
                <div className="col-1-of-4">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-server2"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      MongoDB
                    </h3>
                    <p className="feature-box__text">
                      A noSQL database for data storage
                    </p>
                  </div>
                </div>
                <div className="col-1-of-4">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-server"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      Node js
                    </h3>
                    <p className="feature-box__text">
                      A Javascript runtime built on Google V8 Engine for
                      building RESTful API
                    </p>
                  </div>
                </div>
                <div className="col-1-of-4">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-rss"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      Express js
                    </h3>
                    <p className="feature-box__text">
                      A Node.js framework built on top of node.js
                    </p>
                  </div>
                </div>
                <div className="col-1-of-4">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-world"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      React
                    </h3>
                    <p className="feature-box__text">
                      A Javascript frontend framework for building UI faster
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="section-tours">
              <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">Summary and Links</h2>
              </div>
              <div className="row">
                <div className="col-1-of-3">
                  <div className="card">
                    <div className="card__side card__side--front">
                      <div className="card__picture card__picture--1">
                        &nbsp;
                      </div>
                      <h4 className="card__heading">React</h4>
                      <div className="card__details">
                        <ul>
                          <li>React Lifecycle methods</li>
                          <li>React-Redux</li>
                          <li>React-Hooks</li>
                          <li>Recat-Router</li>
                          <li>React-router</li>
                          <li>Context API</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-1">
                      <div className="card__cta">
                        <div className="card__price-box">
                          <p className="card__price-only">React Logo</p>
                          <p className="card__price-value">React</p>
                        </div>
                        <Link
                          to="https://pello.herokuapp.com"
                          className="btn btn--white"
                        >
                          View project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-of-3">
                  <div className="card">
                    <div className="card__side card__side--front">
                      <div className="card__picture card__picture--2">
                        &nbsp;
                      </div>
                      <h4 className="card__heading"></h4>
                      <div className="card__details">
                        <ul>
                          <li>Express Server</li>
                          <li>Security implementation</li>
                          <li>JSON Web Token </li>
                          <li>MVC Architecture</li>
                          <li>Authentication & Authorisation</li>
                          <li>Error handling</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-2">
                      <div className="card__cta">
                        <div className="card__price-box">
                          <p className="card__price-only">Node js Logo</p>
                          <p className="card__price-value">Node js</p>
                        </div>
                        <Link
                          to="https://github.com/mworiem/MERN-Stack-website"
                          className="btn btn--white"
                        >
                          View project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-of-3">
                  <div className="card">
                    <div className="card__side card__side--front">
                      <div className="card__picture card__picture--3">
                        &nbsp;
                      </div>
                      <h4 className="card__heading"></h4>
                      <div className="card__details">
                        <ul>
                          <li>Mongoose ODM</li>
                          <li>MongoDB Compass</li>
                          <li>MongoDB Atlas cluster</li>
                          <li>Aggregation pipeline</li>
                          <li>CRUD Operations</li>
                          <li>Mongoose Middleware</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-3">
                      <div className="card__cta">
                        <div className="card__price-box">
                          <p className="card__price-only">MongoDB Logo</p>
                          <p className="card__price-value">MongoDB</p>
                        </div>
                        <Link to="#" className="btn btn--white">
                          See project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <div class="footer">
            {/* <!-- <div class="footer__logo"> --> */}
            {/* <!-- <img src="img/logo-3.PNG" alt="Portfolio logo" /> --> */}
            {/* <!-- </div> --> */}
            <ul class="footer__nav">
              <div>
                <a href="#">
                  Contact me at 0703681906/0780681906 or email
                  yusufmworiem@gmail.com
                </a>
              </div>
              {/* <!-- <li><a href="#">Download apps</a></li>
        <li><a href="#">Become a guide</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact</a></li> --> */}
            </ul>
            <p class="footer__copyright">
              &copy; by Yusufu Kibet Mworiem. All rights reserved.
            </p>
          </div>

          {/* <footer className="footer">
              <div className="footer__elem">
                <h2>
                  Call me at 0703681906 / 0780681906 or email me at
                  yusufmworiem@gmail.com
                </h2>

                <h3>&copy;All rights reserved</h3>
              </div>
            </footer> */}
        </body>
        {/* ) : (
          <SignUp />
        )} */}
      </Fragment>
    </div>
  );
};

export default withRouter(Home);
