import React from 'react'
import './NumberGrid.css'

const isPrime =(num) =>{
    if (num < 2) return false
    for (let index = 2; index <= Math.sqrt(num) ; index++) {
        if ((num % index) === 0) {
            return false
        }
    }
    return true
}

const getNumberClass = (num) => {
    if(isPrime(num)) return 'prime'
    if ((num % 2) === 0 ) {
        return 'even'
    }
    return 'odd'
}

const NumberGrid = () => {
    const numbers = []
    for (let index = 0; index < 32; index++) {
        numbers.push(index)
    }
  return (
    <div className='number_grid'>
        {numbers.map((number) =>  <div className={ `number_cell ${getNumberClass(number)}`} >{number}</div>)}
    </div>
  )
}

export default NumberGrid