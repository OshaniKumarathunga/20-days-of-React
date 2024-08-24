import logo from './logo.png';
import './App.css';
import NumberGrid from './Components/NumberGrid';
import HexaColorGrid from './Components/HexaColorGrid';

function App() {
  return (
    <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>30 Days of React</h2>
        <h3>Day 06 - Number Generator</h3>
      </header>
      
      <div>
        <NumberGrid/>
         <h3>HexaColour Grid</h3>
        <HexaColorGrid/>
      </div>

    </div>
  );
}

export default App;
