import React from 'react'
import {tenHighestPopulation} from './populationData'
import Bar from './Bar'

const Chart = () => {
    const popuations = tenHighestPopulation.map ((item) => item.population )
    const MaxPopulation = Math.max(...popuations) 

  return (
    <div>
         {tenHighestPopulation.map((item) => <Bar
         country={item.country}
         population={item.population}
         maxpopulation={MaxPopulation}/>)}
    </div>
  )
}

export default Chart