import Nav from "./Nav";
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
      <Nav isHeader={isHeader}></Nav>
    </header>
  );
};

export default Header;
