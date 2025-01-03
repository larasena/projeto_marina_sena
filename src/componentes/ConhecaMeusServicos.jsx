import React from 'react';
import './ConhecaMeusServicos.css';

function ConhecaMeusServicos(){
    return(
        <section className='conheca_meus_servicos_section' id='servicos'>
            <div className='conheca_meus_servicos_textos'>
                <h1>Conheça meus serviços</h1>

                <div className='texto_p'>
                <p>Vejo o trabalho na clínica como uma ferramenta para acolher o sofrimento, angústia e conflitos psicológicos dos indivíduos que buscam ajuda profissional.</p>
                <p>Atuo na clínica com demandas como: Depressão, Compulsões, Alterações de  humor, Relacionamentos, Luto, Conflitos familiares, Desenvolvimento pessoal, Vícios, Ansiedade e Pânico, Traumas, Fobias e Questões profissionais.</p>
                <p>O objetivo do trabalho na clínica é possibilitar ao indivíduo a compreensão do seu modo de ser-no-mundo, abrindo assim possibilidades para nova forma de existir.</p>
                </div>
            </div>

            <div className='conheca_meus_servicos_link'>  
                <a href="/">Psicoterapia com adultos</a>
                <a href="/">Psicoterapia com adolescentes</a>
                <a href="/">Psicoterapia com casais</a>
                <a href="/">Psicoterapia com idosos</a>
            </div>
        </section>
    )
}

export default ConhecaMeusServicos;