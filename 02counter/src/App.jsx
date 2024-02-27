import './App.css'
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
    console.log(counter);
  }

  const removeValue = () => {
    setCounter(counter - 1);
    console.log(counter);
  }

  return (
    <>
      <h1>React course with Hitesh</h1>
      <h2>Counter value : {counter}</h2>
      <button 
      onClick={addValue}>
        Add Value
      </button> {" "}
      <button
      onClick={removeValue}>
        Remove values
      </button>
      <p>:footer</p>
    </>
  )
}

export default App
