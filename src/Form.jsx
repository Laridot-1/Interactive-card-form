import React from 'react'
import { useGlobalContext } from './Context'

const Form = () => {
  const { handleChange, cardInfo, handleSubmit, error } = useGlobalContext()
  const { digits, name, month, year, cvc } = cardInfo
  const { digitsErr, nameErr, monthErr, yearErr, cvcErr } = error

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">
        <span>cardholder name</span>
        <input type="text" placeholder="e.g. Jane Appleseed" id="name" name="name" onChange={handleChange} value={name} className={nameErr ? "error" : ""} />
        {nameErr && <p>input a valid value</p>}
      </label>
      <label htmlFor="number">
        <span>card number</span>
        <input type="number" placeholder="e.g. 1234 5678 9123 0000" id="number" name="digits" onChange={handleChange} value={digits} className={digitsErr ? "error" : ""} />
        {digitsErr && <p>input a valid value</p>}
      </label>
      <div className="d-grid">
        <label htmlFor="expdate" className='dates'>
          <span>exp. date (mm/yy)</span>
          <div className="dates">
            <input type="number" placeholder='MM' name="month" onChange={handleChange} value={month} className={monthErr ? "error" : ""} />
            <input type="number" placeholder='YY' name="year" onChange={handleChange} value={year} className={yearErr ? "error" : ""} />
          </div>
          {(monthErr || yearErr) && <p>input a valid value</p>}
        </label>
        <label htmlFor="cvc">
          <span>cvc</span>
          <input type="number" placeholder="e.g. 123" id="cvc" name="cvc" onChange={handleChange} value={cvc} className={cvcErr ? "error" : ""} />
          {cvcErr && <p>input a valid value</p>}
        </label>
      </div>
      <button className="btn" type="submit">confirm</button>
    </form>
  )
}

export default Form
