
import './App.css';
import Header from './Header'

function App() {

  function alerta(){
    alert('clicou no botao');
  }










  return (
    <div >
      
        <Header/>
        <h2>
          Bem vindo ao Senac Campinas no curso de REact JS
        </h2>
        <button onClick={alerta}>Click Me</button>
      
    </div>
  );
}

export default App;
