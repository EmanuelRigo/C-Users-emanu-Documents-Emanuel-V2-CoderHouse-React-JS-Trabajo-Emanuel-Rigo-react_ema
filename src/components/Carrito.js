import { useState, useEffect } from "react";
import { useCarrito } from "./CustomProvider";

const Carrito = () => {
  const { carrito, eliminarProducto, vaciarCarrito, totalCarrito } =
    useCarrito();

  const handleClick = (id) => () => eliminarProducto(id);

  return (
    <>
      {carrito.map((pelicula) => {
        console.log(totalCarrito);
        return (
          <div key={pelicula.id}>
            <div className="card">
              <div className="card-image">
                <img className="imagen" src={pelicula.portada} alt="" />
              </div>
              <div className="card-text">
                <h2> {pelicula.title} </h2>
              </div>
              <div className="detalles">
                <p> {pelicula.precio} </p>
                <button onClick={handleClick(pelicula.id)}>borrar</button>
              </div>
            </div>
          </div>
        );
      })}
      <button onClick={vaciarCarrito}>vaciar </button>
      <button onClick={handleClick}>terminar compra</button>
    </>
  );
};

export default Carrito;
