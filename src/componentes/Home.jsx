import React from 'react';
import Header from './Header';
import perfil from '../images/perfil.webp';

function Home(){
    return(
        <section>
            <Header></Header>

            <img src={perfil} alt="perfil" />

            <h1>PSICÓLOGA</h1>

            <h2>Sua jornada de autoconhecimento começa aqui</h2>

            <p>Ajudo você através de uma escuta ativa a conectar-se consigo 
                mesmo e a identificar quais são os padrões que estão limitando sua vida.</p>

            <a href="https://www.figma.com/design/NnVv8IzWZLrrxfIp5Dj0Og/Untitled?node-id=0-1&t=8dXB4VlIucAOBHvV-1">Agende sua consulta</a>


        </section>
    )
}

export default Home;