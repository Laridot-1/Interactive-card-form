import React from 'react'
import back from "./images/bg-card-back.png"
import front from "./images/bg-card-front.png"
import logo from "./images/card-logo.svg"
import { useGlobalContext } from "./Context"

const Cards = () => {
  const { placeholder } = useGlobalContext()
  const { digits, name, month, year, cvc } = placeholder

  return (
    <div className="cards">
      <picture className="back">
        <img src={back} alt="card back" />
        <p className="cvc">{cvc}</p>
      </picture>
      <picture className="front">
        <img src={front} alt="card front" />
        <div className="details-container">
          <img src={logo} alt="card logo" />
          <div className="details">
            <div className="digits">
              <span>{digits.substring(0, 4)}</span>
              <span>{digits.substring(4, 8)}</span>
              <span>{digits.substring(8, 12)}</span>
              <span>{digits.substring(12, 16)}</span>
            </div>
            <div className="info">
              <p className="name">{name}</p>
              <div className="dates">
                <span>{month}</span>/
                <span>{year}</span>
              </div>
            </div>
          </div>
        </div>
      </picture>
    </div>
  )
}

export default Cards
