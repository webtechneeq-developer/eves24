import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";

export default function Header4() {
  return (
    <header id="header" className="header-default header-search">
      <div className="header-top">
        <div className="container">
          <div className="row wrapper-header align-items-center">
            <div className="col-md-4 col-3 d-xl-none">
              <a
                href="#mobileMenu"
                className="mobile-menu"
                data-bs-toggle="offcanvas"
                aria-controls="mobileMenu"
              >
                <i className="icon icon-categories1" />
              </a>
            </div>
            <div className="col-xl-3 col-md-4 col-6">
              <Link to={`/home-furniture`} className="logo-header">
                <img
                  alt="logo"
                  className="logo"
                  src="/images/logo/logo.svg"
                  width={148}
                  height={44}
                />
              </Link>
            </div>
            <div className="col-xl-5 d-none d-xl-block text-center">
              <HeaderSearch />
            </div>
            <div className="col-xl-4 col-md-4 col-3">
              <ul className="nav-icon d-flex justify-content-end align-items-center">
                <li className="nav-account">
                  <a
                    href="#login"
                    data-bs-toggle="offcanvas"
                    className="nav-icon-item"
                  >
                    <i className="icon icon-user" />
                    <span className="text d-none d-xl-block">Login</span>
                  </a>
                </li>
                <li className="nav-wishlist">
                  <Link to={`/wish-list`} className="nav-icon-item">
                    <i className="icon icon-heart" />
                    <span className="text d-none d-xl-block">Wishlist</span>
                  </Link>
                </li>
                <li className="nav-cart">
                  <a
                    href="#shoppingCart"
                    data-bs-toggle="offcanvas"
                    className="nav-icon-item"
                  >
                    <i className="icon icon-cart" />
                    <span className="text d-none d-xl-block">Cart</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom d-none d-xl-block">
        <div className="container">
          <nav className="box-navigation text-center">
            <ul className="box-nav-menu">
              <Nav />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
