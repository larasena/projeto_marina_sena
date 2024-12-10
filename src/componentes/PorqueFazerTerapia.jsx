import React from 'react';
import porqueterapia from '../images/porqueterapia.webp';
import './PorqueFazerTerapia.css';


function PorqueFazerTerapia(){
    return(
        <section className='porque_fazer_terapia_section'>
            <div className='porque_fazer_terapia_textos'>
                <h1>Por que fazer terapia?</h1>

                <p>Quer fazer terapia, mas não tem a mínima ideia de como funciona?. Veja aqui a importância e os benefícios da terapia para o seu corpo e para a sua saúde mental. É comprovado que o tratamento psicoterapêutico traz diversos benefícios para a vida do paciente, segue abaixo alguns dos benefícios mais típicos:</p>

                <ul>
                    <li>Alivia tensões provenientes de conflitos ou situações ruins;</li>
                    <li>Quebra de círculos viciosos e padrões de comportamento nocivos;</li>
                    <li>Superação de situações traumáticas;</li>
                    <li>Tratamento de transtornos mentais;</li>
                    <li>Mudança de percepção - de pessimista para otimista;</li>
                    <li>Promove o autoconhecimento;</li>
                    <li>Melhora os relacionamentos.</li>
                </ul>
            </div>

            <div className='porque_fazer_terapia_img'>
                <img src={porqueterapia} alt="poltrona" />
            </div>

            
        </section>
    )
}

export default PorqueFazerTerapia;