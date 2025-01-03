import React from 'react';
import './Localizacao.css';
import Formulario from '../componentes/Formulario';


function Localizacao(){
    return(
        <section className='localizacao_section'>

            <div className='localizacao'>
                <h1>
                    Localização
                </h1>

                <iframe
                    title="Mapa da localização"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.9807043872875!2d-44.0758755!3d-19.7559744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa68d1fe776673f%3A0x4952e61758b567d2!2sR.%20Francisco%20Augusto%20Vi%C3%AAira%2C%20313%20-%20Sevilha%20(1%20Se%C3%A7%C3%A3o)%2C%20Ribeir%C3%A3o%20das%20Neves%20-%20MG%2C%2033855-320!5e0!3m2!1spt-BR!2sbr!4v1735925568910!5m2!1spt-BR!2sbr"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>


                </div>

                <Formulario></Formulario>
        </section>
    )
}

export default Localizacao;