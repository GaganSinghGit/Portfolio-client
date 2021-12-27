import React from 'react'

import "./Card.css"

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="title-text"> {props.title}</div>
    </div>
  )
}

export default Card
