import logo from './logo.png';
import './App.css';
import Chart from './Components/Chart';

function App() {
  return (
    <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h2>30 Days of React</h2> */}
        <h3>Day 07 - World Population Bar Chart</h3>
      </header>

      <Chart/>
    </div>
  );
}

export default App;
