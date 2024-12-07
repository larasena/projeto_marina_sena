import React from "react";
import logo from "../images/logo.png";


function Header(){
    return(
        <section>
            <div>
                <img src={logo} alt="logo" />
            </div>

            <div>
                <a href="#inicio">Início</a>
                <a href="#sobre">Sobre</a>
                <a href="#servicos">Serviços</a>
                <a href="#contato">Contato</a>
            </div>

        </section>
    )
}

export default Header;