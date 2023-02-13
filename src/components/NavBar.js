import { useContext } from "react";
import { Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import { contexto } from "./CustomProvider";

const Nav = (props) => {
  const { isHeader, textLinkFooter, hrefLinkFooter } = props;
  const { totalProductos } = useContext(contexto);

  if (isHeader) {
    return (
      <nav className="nav">
        <div>
          <Link className="links" to="/peliculas/accion">
            Accion
          </Link>
          <Link className="links" to="/peliculas/aventura">
            Aventura
          </Link>
          <Link className="links" to="/peliculas/terror">
            Terror
          </Link>
          <Link className="links" to="/peliculas/comedia">
            Comedia
          </Link>
        </div>
      </nav>
    );
  } else {
    return (
      <nav>
        <a href={hrefLinkFooter}>{textLinkFooter}</a>
      </nav>
    );
  }
};

export default Nav;
