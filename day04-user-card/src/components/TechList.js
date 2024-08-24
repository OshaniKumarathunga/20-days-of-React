import React from 'react'

const TechList = ({ techs }) => {
    const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techList
  }

export default TechList