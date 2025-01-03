import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../images/logo.png";
import './Header.css';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 50;
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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);  // Alterna o estado para abrir ou fechar o menu
    };

    return (
        <section className={`header_section ${isScrolled ? "scrolled" : ""}`}>
            <header className="header">
                <button className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                </button>
                <a href="/" ><img className={`logo ${isMenuOpen ? "hide" : ""}`} src={logo} alt="logo" /></a>
            </header>
            <div className={`nav_menu_list ${isMenuOpen ? "active" : ""}`}>
                <nav>
                    <ul className="menu_list">
                    <li>
                            <Link to="inicio" smooth={true} duration={500}>Início</Link>
                        </li>
                        <li>
                            <Link to="sobre" smooth={true} duration={500}>Sobre</Link>
                        </li>
                        <li>
                            <Link to="servicos" smooth={true} duration={500}>Serviços</Link>
                        </li>
                        <li>
                            <Link to="contato" smooth={true} duration={500}>Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default Header;
