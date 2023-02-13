import { createContext, useContext, useState, useEffect } from "react";

export const contexto = createContext();
const Provider = contexto.Provider;

export const useCarrito = () => {
  const valorDelContexto = useContext(contexto);
  return valorDelContexto;
};

const CustomProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );
  const [totalProductos, setTotalProductos] = useState(
    parseInt(localStorage.getItem("totalProductos")) || 0
  );

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    localStorage.setItem("totalProductos", totalProductos.toString());
  }, [totalProductos]);

  const agregarProducto = (contador, pelicula) => {
    const copy = carrito.map((producto) => {
      if (producto.id === pelicula.id) {
        return { ...producto, cantidad: producto.cantidad + contador };
      }
      return producto;
    });

    if (!copy.some((prod) => prod.id === pelicula.id)) {
      copy.push({
        id: pelicula.id,
        portada: pelicula.portada,
        title: pelicula.title,
        precio: pelicula.precio,
        cantidad: contador,
      });
    }

    setCarrito(copy);
    setTotalProductos(totalProductos + contador);
    const nombre = "¡Agregaste " + pelicula.nombre + " al carrito!";
  };

  const eliminarProducto = (id) => {
    const copy = [...carrito];
    const index = copy.find((pelicula) => pelicula.id === id);
    setTotalProductos(totalProductos - index.cantidad);
    setCarrito(copy.filter((i) => i.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setTotalProductos(0);
  };

  const valorDelContexto = {
    carrito: carrito,
    totalProductos: totalProductos,
    setTotalProductos: setTotalProductos,
    agregarProducto: agregarProducto,
    eliminarProducto: eliminarProducto,
    vaciarCarrito: vaciarCarrito,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
