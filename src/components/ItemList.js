import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="grid-container">
      {productos.map((pelicula) => {
        return <Item pelicula={pelicula} key={pelicula.id} />;
      })}
    </div>
  );
};

export default ItemList;
