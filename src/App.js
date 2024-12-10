import React from 'react';
import Home from './componentes/Home';
import PorqueFazerTerapia from './componentes/PorqueFazerTerapia';
import ConhecaMeusServicos from './componentes/ConhecaMeusServicos';
import QuemSouEu from './componentes/QuemSouEu';
import ComoFunciona from './componentes/ComoFunciona';
import Depoimentos from './componentes/Depoimentos';


function App(){
    return(
        <div>
            <Home></Home>
            <PorqueFazerTerapia></PorqueFazerTerapia>
            <ConhecaMeusServicos></ConhecaMeusServicos>
            <QuemSouEu></QuemSouEu>
            <ComoFunciona></ComoFunciona>
            <Depoimentos></Depoimentos>
        </div>
        
    )   
}

export default App;