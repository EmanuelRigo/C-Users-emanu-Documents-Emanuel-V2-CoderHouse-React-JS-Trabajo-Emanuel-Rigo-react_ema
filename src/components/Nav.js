import { Link } from "react-router-dom";
import { Routes } from "react-router-dom";

const Nav = (props) => {
  const { isHeader, textLinkFooter, hrefLinkFooter } = props;

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
        </div>
        <span className="material-icons">shopping_cart</span>
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
