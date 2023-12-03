import React, { useState, useContext, useEffect } from 'react'

const ContextProvider = React.createContext()

const Context = ({ children }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [placeholder, setPlaceholder] = useState({
    digits: "0000000000000000",
    name: "jane appleseed",
    month: "00",
    year: "00",
    cvc: "000"
  })

  const [cardInfo, setCardInfo] = useState({
    digits: "",
    name: "",
    month: "",
    year: "",
    cvc: ""
  })

  const regex = {
    digits: /^\d{16}$/,
    name: /^[A-Za-z]+ [A-Za-z]+$/,
    month: /^(0[1-9]|1[0-2])$/,
    year: /^\d{2}$/,
    cvc: /^\d{3}$/
  }

  const [error, setError] = useState({
    digitsErr: false,
    nameErr: false,
    monthErr: false,
    yearErr: false,
    cvcErr: false
  })

  const handleComplete = () => {
    setIsFlipped(false)
  }

  const handleChange = (e) => {
    let val = e.target.value
    setCardInfo({ ...cardInfo, [e.target.name]: val })
    setPlaceholder({ ...placeholder, [e.target.name]: val })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let newErr = {}
    for (let i in cardInfo) {
      if (cardInfo[i] === "") {
        newErr[`${i}Err`] = true
      }
      else if (!regex[i].test(cardInfo[i])) {
        newErr[`${i}Err`] = true
      }
      else {
        newErr[`${i}Err`] = false
      }
    }
    // console.log(newErr)
    setError(newErr)
    if (!newErr.digitsErr && !newErr.nameErr && !newErr.monthErr && !newErr.yearErr && !newErr.cvcErr) {
      setIsFlipped(true)
    }
  }

  useEffect(() => {
    let id = setTimeout(() => {
      setError({ digitsErr: false, nameErr: false, monthErr: false, yearErr: false, cvcErr: false })
    }, 2500)
    return () => clearTimeout(id)
  }, [error])

  const obj = {
    placeholder,
    handleChange,
    cardInfo,
    handleSubmit,
    error,
    isFlipped,
    handleComplete
  }

  return (
    <ContextProvider.Provider value={obj}>
      {children}
    </ContextProvider.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(ContextProvider)
}

export { Context, useGlobalContext }
