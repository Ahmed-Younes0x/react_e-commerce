import { React, useContext, useEffect } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { LangContext } from "../context/Lang";

export default function Header() {
  const cartItemsNumber = useSelector((state) => state.cart.items);
  const ItemsNumber = cartItemsNumber.length;
  const { lang, setLang } = useContext(LangContext); 
  useEffect(()=>{
    document.dir=lang=='Arabic'? 'rtl': 'ltr'
  },[lang])
  const changeLang = (newLang) => {
    setLang(newLang);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">Products App</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav w-100 justify-content-start">
            <Link className="nav-link" to="/">
              Product list
            </Link>
            <Link className="nav-link" to="/p_details">
              product details
            </Link>
            <Link className="nav-link" to="/register">
              Register
            </Link>
            <div className="dropdown-center">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {lang}
              </button>
              <ul className="dropdown-menu">
                <li onClick={() => changeLang('Arabic')}>
                  <a className="dropdown-item" href="#">
                    Arabic
                  </a>
                </li>
                <li onClick={() => changeLang('English')}>
                  <a className="dropdown-item" href="#">
                    English
                  </a>
                </li>
              </ul>
            </div>
            <Link className="nav-link ms-auto" to="/cart">
              <i className="fa fa-cart-plus fa-2x" aria-hidden="true">
                {" "}
                {ItemsNumber}
              </i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
