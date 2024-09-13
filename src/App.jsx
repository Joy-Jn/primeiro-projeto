// import logo from './logo.svg';
import './App.css';

// import FirstComponent from './components/FirstComponent.jsx';
// import TemplateExpression from './components/TemplateExpressions.jsx';
// import MyComponent from './components/MyComponent.jsx';

import Pernalonga from './assets/Pernalonga.jpg'
import ComponentORemake from './components/ComponentORemake.jsx';
import OutroComponent from './components/OutroComponent.jsx';

function App() {
  const n = 15
  const classDiferente = false

  return (
    <div className='App'>
      {/*<FirstComponent />
      <TemplateExpression />
      <MyComponent/> */}

      <ComponentORemake />

      <h1>Olha só o texto aqui</h1>
      
      {/* Css no próprio módulo */}
      <OutroComponent/>

      {/* Css inline */}
      <p style={{color:"blue", padding:"25px", backgroundColor:"red", fontSize:"40px"}}>Este parágrafo é do App.jsx</p>
      
      <h3 style={n > 10 ? ({color:"green", backgroundColor:"yellow"}) : ({color:"red", backgroundColor:"black"}) }> AQUI TEM UM TEXTO COM O PRIMEIRO ESTILO </h3>
      
      <h3 style={n > 10 ? ({color:"green", backgroundColor:"yellow"}) : ({color:"red", backgroundColor:"black"}) }> AQUI TEM UM TEXTO COM O SEGUNDO ESTILO </h3>
      
      {/* Class diferente de acordo com a verificação */}
      <h2 className={classDiferente ? "red-title" : "normal-title"} > TEXTO COM CLASSE DIFERENTE 1 </h2>

      {/* Importação pela pasta public */}
      <img src='./Batman.jpg' width={900} height={400} alt=''></img>

      <img src={Pernalonga} alt=''></img>
    </div>
    );
}

export default App;
