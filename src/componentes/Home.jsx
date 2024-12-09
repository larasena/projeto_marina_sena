import React from 'react';
import Header from './Header';
import perfil from '../images/perfil.webp';
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home(){
    return(
        <section className='home_section'>
            <div>
                <Header></Header>
            </div>
            
            <div className='home_itens'>
                <img className='img_perfil' src={perfil} alt="perfil" />

                <div className='home_texto'>
                    <h1>PSICÓLOGA</h1>

                    <h2>Sua jornada de autoconhecimento começa aqui</h2>

                    <p>Ajudo você através de uma escuta ativa a conectar-se consigo 
                        mesmo e a identificar quais são os padrões que estão limitando sua vida.</p>

                    <a href="https://www.figma.com/design/NnVv8IzWZLrrxfIp5Dj0Og/Untitled?node-id=0-1&t=8dXB4VlIucAOBHvV-1" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp"></i> Agende sua consulta</a>
                </div>
            </div>


        </section>
    )
}

export default Home;