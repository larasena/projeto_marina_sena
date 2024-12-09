import React from "react";
import logo from "../images/logo.png";
import './Header.css';


function Header(){
    return(
        <section className="header_section">
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