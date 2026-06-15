import { useState } from "react"
import './card.css'
import {hastas} from './hastaData'

const Card = (props) => {  {/* should also be passed in which card's info to render*/}

return(
  <div className="card" onClick={props.onClick}>
      <div className={`card ${props.isflipped ? 'card--flipped' : ''}`}>
 
        {/* FRONT */}
        {/* if the prop is flipped, display back, else display front info*/}
        <div className="card__face card__face--front">
          <div className= 'card_image'>
            <img src={props.card.image}></img>
          </div>
        </div>
 
        {/* BACK */}
        <div className="card__face card__face--back">
          <h2 className="card__name">{props.card.name}</h2>
          <p className="card__meaning">{props.card.meaning}</p>
          <p className="card__description">{props.card.description}</p>
        </div>
 
      </div>
    </div>
)
  
};
export default Card