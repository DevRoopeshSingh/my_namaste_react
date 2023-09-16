import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Logo = new URL("../../assets/LogoDesign.png", import.meta.url);

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("rendered again");

  // If no dependency array then it will called on every render
  // If dependency array is empty then useEffect is called on initial render just once for the first time
  // If dependency array is not empty and it has (btnName) so whenever value changes useEffect will be called
  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);

  return (
    <div className="header">
      <div id="logo-container">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            {/* <a href="/About">About us</a> */}
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact"> Contact Us</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
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
