import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // console.log("Header render");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="nav-navigation">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-navigation">
              AboutUs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-navigation">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-navigation">
              Cart
            </Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
