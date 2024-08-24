import logo from './logo.png';
import './App.css';
import { useState } from 'react';

function App() {
  const [isLightMode , setIsLightMode] = useState(false);

  // Function to toggle between light mode and dark mode
  const changeBackground = ()=>{
    // Update the state by toggling the current value
    setIsLightMode(prevMode => !prevMode);
  }; 

  return (
    <div className= {isLightMode? "light-mode": "App"}>
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>30 Days of React</h2>
        <h3>Day 02 - Change the Background</h3>
      </header>

      <div className="container">
        <button onClick={changeBackground}> 
          {isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      </div>
    </div>

  
      
  );
}

export default App;
