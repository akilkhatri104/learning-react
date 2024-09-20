import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)

  // let counter = 15

  const addValue = () => {
    if(counter + 1 > 20){
      alert('Counter cannot go above 20')
      return
    }
    setCounter(++counter)
    setCounter(++counter)
    setCounter(++counter)
    setCounter(++counter)
    console.log("Value Added: ",counter);
    
  }

  const removeValue = () => {
    if(counter-1 < 0){
      alert('Counter cannot go below 0')
      return
    }
    setCounter(--counter)
    console.log("Value Removed: ",counter);
    
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value: {counter}</h2>

      <button 
      onClick={addValue}>Add Value</button>
      <br />
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
