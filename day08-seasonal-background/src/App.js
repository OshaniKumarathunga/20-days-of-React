import React , {useState} from 'react'
import './App.css';
import winterImage from './images/winter.jpg'
import autumnImage from './images/autumn.jpg'
import summerImage from './images/summer.jpg'
import springImage from './images/spring.jpg'


function App() {
  const [season , setSeason] = useState('Winter')
  const handleSeason = (event) => {
    setSeason(event.target.value)
}

  return (
    <div className="App">
      <header className="App-header">
        <h2>30 Days of React</h2>
        <h3>Day 08 - Seasonal Background</h3>
      </header>
      <div className='new-app'>
        <div className='select'>
        <select onChange={handleSeason} value={season}>
        <option value="Autumn">Autumn</option>
        <option value="Winter">Winter</option>
        <option value="Spring">Spring</option>
        <option value="Summer">Summer</option>
      </select>
        </div>
      
      {season === 'Winter' && (<div className='App-header background' style={{backgroundImage:`url(${winterImage})`}}>
     </div>)}
     {season === 'Autumn' && (<div className='App-header background' style={{backgroundImage:`url(${autumnImage})`  }}>
     </div>)}
     {season === 'Spring' && (<div className='App-header background' style={{backgroundImage:`url(${springImage})`  }}>
     </div>)}
     {season === 'Summer' && (<div className='App-header background' style={{backgroundImage:`url(${summerImage})`  }}>
     </div>)}
    </div> 
     </div>
  );
}

export default App;
