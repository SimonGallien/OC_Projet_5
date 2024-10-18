import React from 'react'
import cardList from '../datas/announce.json'
import Card from '../components/Card'

function Home() {
  return (
    <div>
      <div className="cardList">
        {cardList.map(({ id, cover, title }) => (
          <Card key={id} cover={cover} title={title} />
        ))}
      </div>
    </div>
  )
}

export default Home
