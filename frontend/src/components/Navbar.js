import React from "react";
import { Link, NavLink } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../../node_modules/"

// import "../navcss/css/style.css";
// import "../navcss/img/logo-white.png";
import "../index.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
        {/* <Link className="navbar-brand" to="#">
          WebSiteName
        </Link> */}
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navb"
          aria-expanded="true"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navb" className="navbar-collapse collapse hide">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="#">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="#">
                Page 1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Page 2
              </Link>
            </li> */}
          </ul>

          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/sign-up">
                <span className="fas fa-user"></span> Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sign-in">
                <span className="fas fa-sign-in-alt"></span> Login
              </Link>
            </li>
          
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// <nav classNameName="nav nav--tours">
// <Link to="#" classNameName="nav__el">
//   All tours
// </Link>
// {/* <form classNameName="nav__search">
//   <button classNameName="nav__search-btn">
//     <svg>
//         <use xlink:to="img/icons.svg#icon-search"></use>
//       </svg>
//   </button>
//   <input
//     type="text"
//     placeholder="Search tours"
//     classNameName="nav__search-input"
//   />
// </form> */}
// </nav>
// <div classNameName="header__logo">
// <img src="img/logo-white.png" alt="Natours logo" />
// </div>
// <nav classNameName="nav nav--user">
// <Link to="#" classNameName="nav__el">
//   My bookings
// </Link>
// <Link to="#" classNameName="nav__el">
//   <img src="img/user.jpg" alt="User photo" classNameName="nav__user-img" />
//   <span>Jonas</span>
// </Link>
// {/* <!-- <button classNameName="nav__el">Log in</button> */}
// {/* <button classNameName="nav__el nav__el--cta">Sign up</button> --> */}
// </nav>

// <nav classNameName="navbar navbar-expand-lg navbar-light fixed-top">
// <div classNameName="container">
//   <Link classNameName="navbar-brand" to={"/sign-in"}>
//     RemoteStack
//   </Link>
//   <div classNameName="collapse navbar-collapse" id="navbarTogglerDemo02">
//     <ul classNameName="navbar-nav ml-auto">
//       <li classNameName="nav-item">
//         <Link classNameName="nav-link" to={"/sign-in"}>
//           Sign in
//         </Link>
//       </li>
//       <li classNameName="nav-item">
//         <Link classNameName="nav-link" to={"/sign-up"}>
//           Sign up
//         </Link>
//       </li>
//       <li classNameName="nav-item">
//         <Link classNameName="nav-link" to={"/Home"}>
//           Home
//         </Link>
//       </li>
//     </ul>
//   </div>
// </div>
// </nav>
