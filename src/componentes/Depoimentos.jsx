// Depoimentos.js
import React from 'react';
import Slider from 'react-slick'; // Importando o Slider do react-slick
import 'slick-carousel/slick/slick.css'; // Estilos do slick
import 'slick-carousel/slick/slick-theme.css'; // Estilos do tema do slick
import './Depoimentos.css'; // Adicione o seu CSS personalizado

const Depoimentos = () => {
  const settings = {
    dots: true, // Exibe os pontos de navegação
    infinite: true, // Habilita a rotação infinita
    speed: 500, // Duração da transição
    slidesToShow: 1, // Exibe 1 slide por vez
    slidesToScroll: 1, // Rola 1 slide de cada vez
    autoplay: true, // Ativa a rotação automática
    autoplaySpeed: 3000, // Tempo entre cada slide (em milissegundos)
    arrows: true, // Habilita as setas de navegação
  };

  return (
    <section className='depoimentos_section'>
        <div className="depoimentos-container">
      <h2>Depoimentos:</h2>
      <Slider {...settings}>
        <div className="depoimento">
          <p>"Excelente atendimento, muito acolhedor e profissional!"</p>
          <p>- Cliente 1</p>
        </div>
        <div className="depoimento">
          <p>"Mudou minha perspectiva sobre a vida. Altamente recomendada!"</p>
          <p>- Cliente 2</p>
        </div>
        <div className="depoimento">
          <p>"Um espaço seguro e muito eficaz para resolver conflitos internos."</p>
          <p>- Cliente 3</p>
        </div>
      </Slider>
    </div>

    <div className='p_final'>
        <p >Cuide de você e encontre o equilíbrio que <br />merece. Agende sua consulta e comece sua <br />jornada de bem-estar emocional.</p>
    </div>
    </section>
    
  );
};

export default Depoimentos;
