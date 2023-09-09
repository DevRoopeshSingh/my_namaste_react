const logo = new URL("../../assets/LogoDesign.png", import.meta.url);

const Header = () => {
  return (
    <div className="header">
      <div id="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
