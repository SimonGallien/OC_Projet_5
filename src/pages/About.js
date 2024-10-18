import React from 'react'
import aboutContent from '../datas/about.json'
import Collapse from '../components/Collapse'

function About() {
  return (
    <div>
      <div className="aboutContent">
        {aboutContent.map(({ title, content }) => (
          <Collapse key={title} title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default About
