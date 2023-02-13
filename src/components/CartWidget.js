import { Link } from "react-router-dom";
import { useCarrito } from "./CustomProvider";

const CartWidget = () => {
  const { totalProductos, setTotalProductos } = useCarrito();

  return (
    <Link to="/carrito">
      <span className="material-icons">shopping_cart</span>
      {totalProductos}
    </Link>
  );
};

export default CartWidget;
