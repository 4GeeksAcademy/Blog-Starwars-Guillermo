import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

const Navbar = () => {
  const { actions, store } = useContext(Context);

  const routes = {
    home: "/",
    personajes: "/personajeListDisplay",
    vehiculos: "/vehicleListDisplay",
    planetas: "/planetaListDisplay",
  };

  return (
    <nav className="navbar navbar-expand-lg bg-black text-white">
      <div className="container-fluid">
        <h1 className="navbar-brand text-warning">Star Wars</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i
            className="fa-solid fa-bars fa-beat"
            style={{ color: "#ffffff" }}
          ></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to={routes.home}
                className="nav-link text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={routes.personajes} className="nav-link text-white">
                Personajes
              </Link>
            </li>
            <li className="nav-item">
              <Link to={routes.vehiculos} className="nav-link text-white">
                Vehiculos
              </Link>
            </li>
            <li className="nav-item">
              <Link to={routes.planetas} className="nav-link text-white">
                Planetas
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
            <ul className="dropdown-menu dropdown-menu-lg-end">
              {store.Favoritos.length > 0 ? (
                store.Favoritos.map((elemento) => (
                  <li
                    className="d-flex align-items-center justify-content-between"
                    key={elemento._id}
                  >
                    <Link
                      to={`/detailCard/${elemento._id}`}
                      className="dropdown-item"
                    >
                      {elemento.properties.name}
                    </Link>
                    <button
                      className="btn"
                      onClick={() => actions.deleteFav(elemento._id)}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </li>
                ))
              ) : (
                <li>
                  <span className="dropdown-item text-muted">
                    No hay favoritos
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
