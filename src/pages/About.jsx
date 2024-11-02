import React from 'react'
import aboutContent from '../datas/about.json'
import Collapse from '../components/Collapse'
import '../styles/About.css'
import Carousel from '../components/Carousel'
import image2 from '../assets/ImageBanner2.jpg'

function About() {
  const tab = [image2]
  return (
    <>
      <div className="banner">
        <Carousel pictures={tab} />
      </div>
      <div className="aboutContent">
        {aboutContent.map(({ title, content }) => (
          <Collapse key={title} title={title} content={content} />
        ))}
      </div>
    </>
  )
}

export default About
