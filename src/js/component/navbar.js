import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

const Navbar = () => {
  const { actions, store } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Star Wars</a>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to={"/personajeListDisplay"}>
              <li className="nav-item">
                <button
                  onClick={() => {console.log("test",store.Personajes)
				  }}
                  className="nav-link active"
                  aria-current="page"
                >
                  Personajes
                </button>
              </li>
            </Link>
			<Link to={"/vehicleListDisplay"}>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Vehiculos
              </a>
            </li>
			</Link>
			<Link to={"/planetaListDisplay"} >
            <li className="nav-item">
              <a className="nav-link" href="#">
                Planetas
              </a>
            </li>
			</Link>
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
              <li>
                <button className="dropdown-item" type="button">
                  1
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  2
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  3
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
