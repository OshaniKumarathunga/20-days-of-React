import React from 'react'

function Questions(props) {
    const style = {
        container: {
            textAlign: 'center',
            border: '3px solid white',
            padding: '5px',
            margin: '5px 300px',
            fontSize: '20px'
          }
    }
  return (
    <div style={style.container}
        onClick={props.click}>
         <p>{props.questions}</p>
    </div>

  )
}

export default Questions;