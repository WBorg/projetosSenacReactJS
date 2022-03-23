
import './App.css';
import Header from './Header'

function App() {

  function alerta(){
    alert('clicou no botao');
  }

  return (
    /*tem q ficar tudo envelopado dentro de uma tag*/
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









