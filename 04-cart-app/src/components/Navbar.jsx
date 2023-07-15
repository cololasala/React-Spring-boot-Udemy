import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid text-light">
        <h4 className="navbar-brand pb-0">Cart App</h4>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"catalog"}>
                Catalogo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"cart"}>
                Carrito
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
