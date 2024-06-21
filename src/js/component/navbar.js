import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

const Navbar = () => {
  const { actions, store } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Star Wars
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"}>
                <span className="nav-link" aria-current="page">
                  Home
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/personajeListDisplay"}>
                <span className="nav-link">Personajes</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/vehicleListDisplay"}>
                <span className="nav-link">Vehiculos</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/planetaListDisplay"}>
                <span className="nav-link">Planetas</span>
              </Link>
            </li>
          </ul>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favoritos
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {store.Favoritos.map((elemento) => (
                <li key={elemento._id}>
                  <button className="dropdown-item" type="button">
                    {elemento.properties.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
