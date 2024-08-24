import logo from './logo.png';
import './App.css';
import HexaColorGenerator from './components/HexaColorGenerator';

function App() {
  return (
    <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>30 Days of React</h2>
        <h3>Day 05 - Random Colour Picker</h3>
      </header>
      <div className='ColorPicker'>
        <HexaColorGenerator/>
      </div>
    </div>
  );
}

export default App;
