import React from 'react'
import './Header.css'

const showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
  
    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }


//Destructuring the props inside the parenthesis
const Header = ({data: {welcome,  author:{firstName,lastName}, date}}) => {
  return (
    <div className='header-wrapper'>
    <h1>{welcome}</h1>
    <p>
      {firstName} {lastName}
    </p>
    <small>{showDate(date)}</small>
  </div>
  )
}

export default Header