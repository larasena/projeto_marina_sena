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
                    src="https://www.google.com/maps/embed?pb=!4v1734359986312!6m8!1m7!1sIpj8RPPrSbiyeesKN0I4EA!2m2!1d-19.7560354454822!2d-44.07580958808271!3f101.31!4f-2.3700000000000045!5f0.7820865974627469"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>


                </div>

                <Formulario></Formulario>
        </section>
    )
}

export default Localizacao;