import React from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Collapse from '../components/Collapse'
import Error from './404'
import cardList from '../datas/announce.json'
import '../styles/Fiche.css'
import Tags from '../components/Tags'
import Rating from '../components/Rating'

function Fiche() {
  const { id } = useParams() // Récupère l'ID de l'URL
  const card = cardList.find((item) => item.id === id) // Trouve la carte correspondante

  if (!card) {
    return (
      <div>
        <Error />
      </div>
    )
  }
  return (
    <div>
      <Carousel pictures={card.pictures} />
      <div className="container">
        <div className="container__titleLocation">
          <h2 className="content__title">{card.title}</h2>
          <span className="content__Localisation">{card.location}</span>
          <div className="content__tags">
            <Tags tags={card.tags} />
          </div>
        </div>
        <div className="owner">
          <div className="owner__profil">
            <span className="owner__name">{card.host.name}</span>
            <img src={card.host.picture} className="owner__photo" alt="host" />
          </div>
          <Rating rating={card.rating} />
        </div>
      </div>
      <div className="fiche_collapse">
        <div className="collapse_descrition">
          <Collapse title="Description" content={card.description} />
        </div>
        <div className="collapse_equipement">
          <Collapse title="Equipement" content={card.equipments} />
        </div>
      </div>
    </div>
  )
}

export default Fiche
