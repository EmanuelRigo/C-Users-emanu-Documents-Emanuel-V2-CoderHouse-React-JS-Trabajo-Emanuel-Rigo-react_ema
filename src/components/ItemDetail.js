import ItemCount from "./ItemCount";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import agregarProducto from "./CustomProvider";

const ItemDetail = ({ pelicula, stock = 5 }) => {
  const onAdd = (cantidad) => {
    agregarProducto();
  };

  return (
    <div className="card2">
      <div className="card-image2">
        <img className="imagen" src={pelicula.portada} alt="" />
      </div>
      <div className="card-text">
        <h2> {pelicula.title} </h2>
      </div>
      <div className="detalles">
        <p> {pelicula.precio} </p>
        <ItemCount pelicula={pelicula}></ItemCount>
        <p> {pelicula.genero} </p>
        <p> {pelicula.fecha} </p>
      </div>
    </div>
  );
};

export default ItemDetail;
