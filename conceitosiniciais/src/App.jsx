
import {useState} from 'react';
import './App.css';
import Header from './Header'

function App() {

 function handleButtonClick(){
   alert('Clicou no botão');
 }

 function sum(a,b){
   return a+b;
 }

//  let contador = 0;
 const [contador, setContador] = useState(0);
 function handleButtonContar(){
  // contador++;
  setContador(contador+1);
 }


  return (
    <div className="App">
        <Header title="Meu primeiro Component React" />
        <Header title="Um componente com props" />
        <h2>
         SENAC CAMPINAS ...
         <div>Retorno da soma: {sum(5,6)}</div>
        </h2>
        <button onClick={handleButtonClick}>Click Me!</button>
        <Header title={contador} />
        <button onClick={handleButtonContar}>Contar</button>

    </div>
  );
}

export default App;
        
      
        
     
