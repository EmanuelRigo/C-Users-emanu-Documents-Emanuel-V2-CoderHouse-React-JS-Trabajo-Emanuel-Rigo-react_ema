import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [load, setLoad] = useState(false);
  const [productos, setProductos] = useState([]);
  const props = useParams();

  useEffect(() => {
    const productosCollecion = collection(db, "productos");
    const pedidoFirestore = getDocs(productosCollecion);

    pedidoFirestore
      .then((repuesta) => {
        const productos = repuesta.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setProductos(productos);

        return productos;
      })

      .then((productos) => {
        props.categoria === undefined
          ? setProductos(productos)
          : setProductos(
              productos.filter(
                (producto) => producto.genero === props.categoria
              )
            );
        setLoad(true);
      })

      .catch((error) => {
        console.log("no se pudo cargar");
      });
  }, [props]);

  return (
    <>
      {load ? null : "cargando..."}
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
