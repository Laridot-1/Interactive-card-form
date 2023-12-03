import React from 'react'
import logo from "./images/icon-complete.svg"
import { useGlobalContext } from './Context'

const Complete = () => {
  const { handleComplete } = useGlobalContext()

  return (
    <div className="complete">
      <img src={logo} alt="complete logo" />
      <div>
        <h3>thank you!</h3>
        <p>We've added your card details</p>
      </div>
      <button className="btn" onClick={handleComplete}>continue</button>
    </div>
  )
}

export default Complete
