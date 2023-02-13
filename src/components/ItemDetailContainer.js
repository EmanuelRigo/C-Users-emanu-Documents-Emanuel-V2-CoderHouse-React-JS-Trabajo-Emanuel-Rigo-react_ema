import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { datosPeliculas } from "./datosPeliculas.js";
import ItemDetail from "./ItemDetail.js";

const ItemDetailContainer = () => {
  const [pelicula, setProducto] = useState();

  const params = useParams();

  useEffect(() => {
    const pelicula = datosPeliculas.find(
      (datosPeliculas) => datosPeliculas.id === params.id
    );

    setProducto(pelicula);
  }, []);

  return (
    <div>
      {pelicula ? (
        <ItemDetail pelicula={pelicula}></ItemDetail>
      ) : (
        <h1>"Cargando..."</h1>
      )}
    </div>
  );
};

export default ItemDetailContainer;
