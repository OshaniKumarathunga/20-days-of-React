import logo from './logo.png';
import './App.css';
import UserImage from './userImage.jpg'
import Header from './components/Header';
import Main from './components/Main';


function App() {
  const data = {
    welcome: 'Hey Everyone...',
    author: {
      firstName: 'Oshani',
      lastName: 'Pabasara',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }
   // copying the author from data object to user variable using spread operator
  const user = {...data.author , image:UserImage}
  const techs = ['HTML', 'CSS', 'JavaScript']

  const greetPeople = () => {
    alert('Welcome to 30 Days Of React , 2024')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>30 Days of React</h2>
        <h3>Day 03 - User Card</h3>
      </header>
      <div className='user-card'>
      <Header data={data} />
      <Main user={user} techs={techs} greatpeople={greetPeople}></Main>
      </div>
    </div>
  )
}

export default App;
