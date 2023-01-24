import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="hola" />} />
        <Route
          path="/peliculas/:categoria"
          element={<ItemListContainer greeting="hola" />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </main>
  );
};

export default Main;
