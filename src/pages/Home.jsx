import React from 'react'
import cardList from '../datas/announce.json'
import Card from '../components/Card'
import '../styles/Home.css'
import Carousel from '../components/Carousel'
import image1 from '../assets/ImageBanner1.jpg'

function Home() {
  const tab = [image1]
  return (
    <>
      <div className="banner banner--brightness">
        <Carousel pictures={tab} />
        <p className="banner__text">Chez vous, partout et ailleurs</p>
      </div>

      <div className="cardList">
        {cardList.map(({ id, cover, title }) => (
          <Card key={id} id={id} cover={cover} title={title} />
        ))}
      </div>
    </>
  )
}

export default Home
