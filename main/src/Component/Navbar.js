import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { NavLink } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

// import { BsList } from "react-icons/bs";
// import Menu from "./Menu";
// function Navbar() {
//   return (
//     <div className="main-navbar shadow-sm sticky-top">
//       <div className="top-navbar">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
//               <div className="brand-flex">
//                 <h5 className="brand-name">Multi</h5>
//                 <h5 className="brand-name-color">Vendor</h5>
//               </div>
//             </div>
//             <div className="col-md-1 my-auto">
//               <Menu />
//             </div>

//             <div className="col-md-4 py-1">
//               {/* <form role="search">
//                                 <div className="input-group">
//                                     <input type="search" placeholder="Search your product" className="form-control" />
//                                     <button className="btn bg-white" type="submit">
//                                         <i className="fa fa-search"></i>
//                                     </button>
//                                 </div>
//                             </form> */}
//               <ul className="navbar-nav me-2 mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     Home
//                   </a>
//                 </li>
//                 {/* <li className="nav-item">
//                                     <a className="nav-link" href="#">All Categories</a>
//                                 </li> */}
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     New Arrivals
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     Featured Products
//                   </a>
//                 </li>
//                 {/* <li className="nav-item">
//                                     <a className="nav-link" href="#">Electronics</a>
//                                 </li> */}
//               </ul>
//             </div>
//             <div className="col-md-4 my-auto">
//               <ul className="nav justify-content-end">
//                 {/* <li className="nav-item">
//                                     <a className="nav-link" href="#">
//                                         <i className="fa fa-shopping-cart"></i> Cart (0)
//                                     </a>
//                                 </li>
//                                 <li className="nav-item dropdown">
//                                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                         <i className="fa fa-user"></i> User
//                                     </a>
//                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                         <li><a className="dropdown-item" href="#"><i className="fa fa-user"></i> Profile</a></li>
//                                         <li><a className="dropdown-item" href="#"><i className="fa fa-list"></i> My Orders</a></li>
//                                         <li><a className="dropdown-item" href="#"><i className="fa fa-heart"></i> My Wishlist</a></li>
//                                         <li><a className="dropdown-item" href="#"><i className="fa fa-shopping-cart"></i> My Cart</a></li>
//                                         <li><a className="dropdown-item" href="#"><i className="fa fa-sign-out"></i> Logout</a></li>
//                                     </ul>
//                                 </li> */}
//                 <button className="auth-btn">
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">
//                       Login
//                     </a>
//                   </li>
//                 </button>
//                 {/* <li>/</li> */}
//                 <button className="auth-btn-filled">
//                   <li className="nav-item">
//                     <a className="nav-link text-white" href="#">
//                       Register
//                     </a>
//                   </li>
//                 </button>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <nav className="navbar navbar-expand-lg bg-white" aria-label="Eleventh navbar example">
//                 <div className="container-fluid">
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>

//                     <div className="collapse navbar-collapse" id="navbarsExample09">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <Menu />
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Home</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">All Categories</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">New Arrivals</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Featured Products</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Electronics</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Fashions</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Accessories</a>
//                         </li>
//                             <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Other Products</a>
//                                 <ul className="dropdown-menu">
//                                     <li><a className="dropdown-item" href="#">Grocery</a></li>
//                                     <li><a className="dropdown-item" href="#">Bills</a></li>
//                                     <li><a className="dropdown-item" href="#">Payment</a></li>
//                                 </ul>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav> */}
//     </div>
//   );
// }

function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <button
              className="btn btn-white ms-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            >
              <span style={{ fontSize: "20px" }}> &#9776;</span>
            </button>
            <NavLink to="/" className="nav-link text-decoration-none">
              <h4 style={{ paddingRight: "1rem", marginBottom: "0" }}>
                Multi<span style={{ color: "green" }}>Vendor</span>
              </h4>
            </NavLink>
          </a>

          <div
            className="offcanvas offcanvas-start"
            style={{ width: "300px" }}
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex="-1"
            id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                Contents
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <p>Menu 1</p>
              <p>Menu 2</p>
              <p>Menu 3</p>
              <p>Menu 4</p>
              <p>Menu 5</p>
            </div>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end btn-container">
            <button className="btn btn-white me-md-2" type="button">
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "black" }}
              >
                Home
              </NavLink>
            </button>
            <button className="btn btn-white" type="button">
              New Arrivals
            </button>
            <button className="btn btn-white" type="button">
              Featured Products
            </button>
            <button type="button" class="btn btn-default btn-sm">
              <span
                class="glyphicon
                    glyphicon-shopping-cart"
              ></span>
              <NavLink to="/Cart" className="nav-link text-decoration-none">
                <div className="font-icon">
                  <div className="font-icon1">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </div>
                  <div className="font-icon2">
                    <b> Cart </b>
                  </div>
                </div>
              </NavLink>
            </button>
            <button className="btn btn-white" type="button">
              Login
            </button>
            <button className="btn btn-success" type="button">
              Register
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
