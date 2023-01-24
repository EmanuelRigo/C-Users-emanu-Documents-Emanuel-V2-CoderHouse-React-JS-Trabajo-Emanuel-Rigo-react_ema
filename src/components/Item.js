import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="tarjeta" key={producto.id}>
      <h3 className="titulo">{producto.title}</h3>
      <div className="imagen">
        <img src={producto.portada} alt={producto.title} />
      </div>
      <div className="comprar">
        <p className="precio">{producto.precio}</p>
        <button>comprar</button>
      </div>
      <Link className="verMas" to={"/item/" + producto.id}>
        ver mas
      </Link>
    </div>
  );
};

export default Item;
