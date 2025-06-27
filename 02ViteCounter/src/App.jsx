import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addvalue = () => {
    setCount(count + 1)
  }

  const removevalue = () => {
    if(count >= 1){
      setCount(count - 1)
    }
    else{
      alert("Cannot go below zero")
    }
  }

  return (
    <>
      <h1>Hare Krishna!!!</h1>
      <h2>Let's build a counter using react. {count} </h2>
      <br />
      <button onClick={addvalue}>Add Value {count} </button>
      <br />
      <button onClick={removevalue}>Remove Value {count} </button>
      <p>footer: {count} </p>
    </>
  )
}

export default App
