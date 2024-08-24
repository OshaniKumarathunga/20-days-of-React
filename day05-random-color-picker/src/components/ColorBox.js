import React from 'react'
import './ColorBox.css'

const ColorBox = ({color,color2 , onclick}) => {
  return (
    <div>
    <div className='colorBox'style={{ backgroundColor:color}}>
            <p>{color}</p>
        </div>
        <div className='colorBox'style={{ backgroundColor:color2 , marginTop:10 }}>
            <p>{color2}</p>
        </div>
        <button className='button' onClick={onclick} >Generate the Random Color</button>
    </div>
  )
}

export default ColorBox