import React from 'react'

const Bar = ({country , population , maxpopulation}) => {
    const barWidth = (population / maxpopulation)*100 ;

    const barStyle = {
        width: `${barWidth}%`,
        backgroundColor: 'rgb(244, 41, 153)',
        height: '30px',
        margin: '5px 0',
        marginLeft: '10px'
      };
    
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginLeft:'20px' , marginRight:'20px' }}>
          <span style={{ width: '100px', textAlign: 'left' }}>{country}</span>
          <div style={barStyle}></div>
          <span style={{ marginLeft: '10px',  marginRight: '20px',textAlign: 'right' }}>{population}</span>
        </div>
      );
}

export default Bar