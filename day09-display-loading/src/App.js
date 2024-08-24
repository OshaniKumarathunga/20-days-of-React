import React , {useState} from 'react'
import logo from './logo.png';
import './App.css';

function App() {
  const [data , setData] = useState(null)
  const [loading , setLoading] = useState(false)
  const [error , setError] = useState(null)
  
   const fetchData = () => {
    setLoading(true)
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success){
      setData({message : "Data is Loaded"})
      setError(null)
    } else {
      setError ({message: "Error is occured"})
      setData(null)
    }
    setLoading(false)
    }, 3000);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>30 Days of React</h2>
        <h3>Day 09 - display loading</h3>
      </header>
      <div>
        <button className='button' onClick={fetchData}>Fetch Data</button>
        {loading && <p>loading...</p>}
        {data && <p>{data.message}</p>}
        {error && <p>{error.message}</p>}
      </div>
    </div>
  );
}

export default App;
