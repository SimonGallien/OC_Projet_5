import React from 'react'
import cardList from '../datas/announce.json'
import Card from '../components/Card'
import '../styles/Home.css'

function Home() {
  return (
    <>
      <div className="cardList">
        {cardList.map(({ id, cover, title }) => (
          <Card key={id} id={id} cover={cover} title={title} />
        ))}
      </div>
    </>
  )
}

export default Home
