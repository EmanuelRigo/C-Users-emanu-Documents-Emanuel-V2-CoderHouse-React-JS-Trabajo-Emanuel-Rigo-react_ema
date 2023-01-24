import Header from "./Header";
import Main from "./Main";
import ItemListContainer from "./ItemListContainer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Main></Main>
    </BrowserRouter>
  );
};

export default App;
