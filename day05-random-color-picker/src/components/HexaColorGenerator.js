import React from 'react'
import { useState } from 'react';
import ColorBox from './ColorBox';

const randomColorGenerator = () =>{
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
  }
  return '#' + color
}
const HexaColorGenerator = () => {
    const [color , setColor] =  useState(randomColorGenerator());
    const [color2 , setColo2] =  useState(randomColorGenerator());

    const updateColour =()=>{
        setColor(randomColorGenerator())
        setColo2(randomColorGenerator())
    }

  return (
    <div className='container'>
        <ColorBox color={color}  color2={color2} onclick={updateColour}/>
    </div>
  )
}

export default HexaColorGenerator;