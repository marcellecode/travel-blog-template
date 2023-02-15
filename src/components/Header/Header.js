import "./Header.scss";
import logo from "../../assets/img/TravelLogo.png";
import { GiEarthAmerica, GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="header-container">
      <div className={`links-container ${(isOpen ? 'expanded' :  '')}`}>
        <a href="#">blog</a>
        <a href="#passeios">passeios</a>
        <a href="#">sobre nós</a>
        <a href="#">contato</a>
      </div>
      <div className="logo-container">
        <img src={logo} alt="Travel Logo" />
      </div>
      <div className="language-container">
        <span>PT-BR</span>
        <GiEarthAmerica />
      </div>
      <button className="hamburguer-icon" onClick={() => setOpen(!isOpen)}>
        <GiHamburgerMenu />
      </button>
    </header>
  );
};

export default Header;
