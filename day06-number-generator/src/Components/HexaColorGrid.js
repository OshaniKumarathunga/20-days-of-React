import React from 'react'
import './NumberGrid.css'

const randomColorGenerator = () =>{
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
  }
  return '#' + color
}

const HexaColorGrid = () => {
    const colors = []
    for (let index = 0; index < 32; index++) {
        colors.push(randomColorGenerator())
    }
  return (
    <div className='number_grid'>
       {colors.map((color) => <div className='number_cell' style={{backgroundColor:color}}> {color} </div>)}
    </div>
  )
}

export default HexaColorGrid