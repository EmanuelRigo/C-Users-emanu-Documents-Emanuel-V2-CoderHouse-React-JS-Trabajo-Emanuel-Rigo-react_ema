import Header from "./Header";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import Carrito from "./Carrito";
import CustomProvider from "./CustomProvider";

const App = () => {
  return (
    <CustomProvider>
      <BrowserRouter>
        <Header></Header>
        <Main></Main>
      </BrowserRouter>
    </CustomProvider>
  );
};

export default App;
