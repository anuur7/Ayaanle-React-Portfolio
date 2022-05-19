import './Cards.css'
import React from "react";

const Cards = (props) => {
  return (
    <div>
      <ul class="cards-container">
        {props.cards.map((card) => (
          <li className="card" key={card.id}>
            {card.title}
            {card.github}
            {card.image}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;
