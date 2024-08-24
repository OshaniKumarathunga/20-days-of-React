import logo from './logo.png';
import './App.css';
import { useState } from 'react';
import Questions from './components/Questions';

function App() {
  const [quetions , setanswers] = useState("What is your name")

  const handleQue= () => {
    setanswers('Oshani')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>30 Days of React</h2>
        <h3>Day 01 - Question & Answers</h3>
      </header>
      <div>
        <Questions questions={quetions}
                   click={handleQue}/>
      </div>
    </div>
  );
}

export default App;
