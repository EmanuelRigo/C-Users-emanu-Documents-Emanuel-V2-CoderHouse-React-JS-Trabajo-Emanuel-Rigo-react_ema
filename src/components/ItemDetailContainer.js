import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const params = useParams();

  return <ItemDetail />;
};

export default ItemDetailContainer;
