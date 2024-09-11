import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent.jsx';
import TemplateExpression from './components/TemplateExpressions.jsx';
import MyComponent from './components/MyComponent.jsx';


function App() {
  return (
    <div className='App'>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent/>
    </div>
    );
}

export default App;
