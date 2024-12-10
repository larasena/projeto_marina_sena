import React from 'react';
import Home from './componentes/Home';
import PorqueFazerTerapia from './componentes/PorqueFazerTerapia';
import ConhecaMeusServicos from './componentes/ConhecaMeusServicos';
import QuemSouEu from './componentes/QuemSouEu';


function App(){
    return(
        <div>
            <Home></Home>
            <PorqueFazerTerapia></PorqueFazerTerapia>
            <ConhecaMeusServicos></ConhecaMeusServicos>
            <QuemSouEu></QuemSouEu>
        </div>
        
    )   
}

export default App;