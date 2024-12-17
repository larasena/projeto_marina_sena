import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";

import './Header.css';


function Header(){

    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50; // Ajuste o valor conforme necessário
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


    return(
        <section className={`header_section ${isScrolled ? "scrolled" : ""}`}>
            <header className="header">
                <a href="/" ><img className="logo" src={logo} alt="logo"/></a>
            </header>
            
            <nav>
                <ul className="menu">
                    <li><a href="#inicio">Início</a></li>
                     <li><a href="#sobre">Sobre</a></li>   
                     <li><a href="#servicos">Serviços</a></li>   
                     <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default Header;