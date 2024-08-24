import logo from './logo.png';
import './App.css';
import { useState } from 'react';
import countries from './Components/countries';

const randomCountry = () => {
  const countryIndex = Math.floor(Math.random() * (countries.length))
  return countries[countryIndex]
}

function App() {
  const [country , setCountry] = useState(randomCountry())
  
 const handleRandomCountry = () => {
    setCountry(randomCountry())
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>30 Days of React</h2>
        <h3>Day 03 - Random Country Selector</h3>
      </header>

      <div className="App-header" >
        <div style={{ border: '2px solid white' , width:'500'  }} >
          <img src={country.flag} alt={`Flag of ${country.name}`} width="200" />
          <h2>{country.name}</h2>
          <h3>Population: {country.population}</h3>
          <p>Languages: {country.languages.join(', ')}</p>
          <button onClick={handleRandomCountry}>Select Random Country</button>
        </div>
        
      </div>
    </div>
  )
  
}

export default App;
