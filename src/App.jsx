import React from "react"
import Cards from "./Cards"
import Form from "./Form"
import { useGlobalContext } from "./Context"
import Complete from "./Complete"

function App() {
  const { isFlipped } = useGlobalContext()

  return (
    <div className="background">
      <div className="container">
        <Cards />
        {isFlipped ? <Complete /> : <Form />}
      </div>
    </div>
  )
}

export default App
