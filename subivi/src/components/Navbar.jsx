import { useState } from "react";
import logo from "../assets/images/logo.svg";
import "../assets/styles/Navbar.scss";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <nav className={`navbar ${sidebar && "open"}`}>
      <div className="navbar_container">
        <div className="navbar_left">
          <img src={logo} alt="SUBIVI" className="navbar_logo" />
          {!sidebar ? (
            <i className="bi bi-list" onClick={() => setSidebar(true)}></i>
          ) : (
            <i className="bi bi-x-lg" onClick={() => setSidebar(false)}></i>
          )}
        </div>
        <ul className={`navbar_right ${sidebar && "sidebar_open"}`}>
          <li className="navbar_link">Home</li>
          <li className="navbar_link">Features</li>
          <li className="navbar_link">Blog</li>
          <li className="navbar_link">Pricing</li>
          <li className="navbar_link">Login</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
