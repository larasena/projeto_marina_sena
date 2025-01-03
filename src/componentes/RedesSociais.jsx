import React from 'react';
import './RedesSociais.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function RedesSociais(){
    return(
        <section className='redes_sociais_section'>
            {/*  <div className='redes_sociais_botao'>
             <a href="https://www.figma.com/design/NnVv8IzWZLrrxfIp5Dj0Og/Untitled?node-id=0-1&t=8dXB4VlIucAOBHvV-1" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp"></i> Agende sua consulta</a>
            </div> */}

            <div className='redes_sociais_icones'>

                <p>Redes sociais</p>

                <a href="https://www.instagram.com/psimarinasena/?igsh=Y256M3dlOGlwdWdn" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i></a>
            
                <a href="https://api.whatsapp.com/send/?phone=5531993165337&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp"></i></a>
            </div>
        </section>
    )
}

export default RedesSociais;