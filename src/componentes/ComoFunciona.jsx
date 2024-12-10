import React from 'react';
import './ComoFunciona.css';

function ComoFunciona(){
    return(
        <section className='como_funciona_section'>
            <div className='como_funciona_itens'>
                <h1>Como funciona?</h1>

                <ul>
                    <li><b>Encontros Semanais:</b> Toda semana há um encontro online por vídeo chamada</li>
                    <li><b>Duração da Sessão:</b>Cada sessão tem duração de 50 minutos</li>
                    <li><b>Comprometimento:</b>É importante que tanto o terapeuta quanto o paciente se comprometam com o processo para alcançarem os melhores resultados em terapia</li>
                    <li><b>A sessão:</b>É um espaço para você, no qual é possível trazer todas as suas questões de maneira livre, sem filtros e sem julgamentos.</li>
                    <li><b>Como psicóloga:</b>Irei acompanhar, pontuar, questionar e intervir de maneira que lhe auxilie a voltar o olhar para aquilo que se manifesta, tendo como base a compreensão empática e uma relação de transparência.</li>
                </ul>
            </div>
            
        </section>
    )
}

export default ComoFunciona;