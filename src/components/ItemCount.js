import { useState } from "react";
import { useCarrito } from "./CustomProvider";

const ItemCount = ({ pelicula, location }) => {
  const { agregarProducto } = useCarrito();

  const [contador, setContador] = useState(1);

  const handleSumar = () => {
    if (contador < 20) {
      setContador(contador + 1);
    }
  };

  const handleRestar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const handleConfirmar = () => {
    agregarProducto(contador, pelicula);
  };

  let btnCount;
  let btnMain;
  if (location === "main") {
    btnCount = "btnCountMain";
    btnMain = "btnAddMain";
  } else {
    btnCount = "btnCountDetail";
    btnMain = "btnAddDetail";
  }

  return (
    <div>
      <button onClick={handleSumar}>+</button>
      <p>Cantidad : {contador}</p>
      <button onClick={handleRestar}>-</button>
      <button onClick={handleConfirmar}>confirmar</button>
    </div>
  );
};

export default ItemCount;
