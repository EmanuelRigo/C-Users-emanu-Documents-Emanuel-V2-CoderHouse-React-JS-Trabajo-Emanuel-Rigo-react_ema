import { Link } from "react-router-dom";

const Item = ({ pelicula }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img className="imagen" src={pelicula.portada} alt="" />
      </div>
      <div className="card-text">
        <h2> {pelicula.title} </h2>
      </div>
      <div className="detalles">
        <p> {pelicula.precio} </p>
        <p>
          <Link className="vermas" to={"/item/" + pelicula.id}>
            ver mas
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Item;
