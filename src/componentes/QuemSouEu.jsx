import React from 'react';
import perfil from '../images/perfil.webp';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './QuemSouEu.css';


function QuemSouEu(){
    return(
        <section className='quem_sou_eu_section'>
            <div className='quem_sou_eu_itens'>
                    <img src={perfil} alt="perfil" className='quem_sou_eu_img'/>
            
                <div className='quem_sou_eu_textos'>
                    <h1>Quem sou eu?</h1>

                    <p>Olá, me chamo Marina Sena, sou Psicóloga Clinica CRP ??????, moro em Ribeirão das Neves, me formei em Psicologia pela Universidade ?????. Tenho como base a abordagem de orientação psicanalítica e o meu propósito como profissional de saúde mental é de te ajudar a superar e entender melhor suas dificuldades, onde você terá ferramentas para alcançar seus objetivos. Na minha prática clínica você terá um ambiente ético, seguro e acolhedor</p>

                    <a href="https://www.figma.com/design/NnVv8IzWZLrrxfIp5Dj0Og/Untitled?node-id=0-1&t=8dXB4VlIucAOBHvV-1" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-whatsapp"></i> Agende sua consulta</a>
                </div>
            </div>
        </section>
    )
}

export default QuemSouEu;