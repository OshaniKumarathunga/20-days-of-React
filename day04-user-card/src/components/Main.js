import React from 'react'
import UserCard from './UserCard'
import TechList from './TechList'

const Button = ({ text, onClick, style }) => (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  )

  // CSS styles in JavaScript Object
  const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: 15,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
  }

const Main = ({user , techs , greatpeople}) => {
  return (
    <main>
    <div className='main-wrapper'>
      <UserCard user={user} />
      <p>Preferred Tech Stack : </p>
      <ui><TechList techs={techs}/></ui>
      <Button text='Greate People' style={buttonStyles} onClick={greatpeople}/>
    </div>
    </main>
  )
}

export default Main