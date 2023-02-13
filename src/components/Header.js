import NavBar from "./NavBar";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Header = () => {
  const isHeader = true;

  return (
    <header className="header">
      <div className="logo">
        <Link className="links" to="/">
          <img src="../logo.png" alt="" />
        </Link>
      </div>
      <NavBar isHeader={isHeader}></NavBar>
      <CartWidget></CartWidget>
    </header>
  );
};

export default Header;
