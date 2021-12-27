import React from 'react'
import Card from './Card/Card';
import './CardContainer.css'

const CardContainer = (props) => {
  return (
    <div className="cards-container">
      <div className="cards-container-heading"> {props.heading} </div>

      <div className="cards">
        {props.data.map((e) => {
          return <Card className="card" title={e.title} />;
        })}
      </div>
    </div>
  );
}

export default CardContainer
