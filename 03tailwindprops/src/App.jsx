import { useState } from 'react'
import React from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="align-middle p-10">
        <h1 className="text-3xl bg-green-500 p-3 rounded-md">Vite with Tailwind</h1>
        <label htmlFor=""></label>
        <Card username='sushant' post='mba'/>
        <Card />
      </div>
    </>
  )
}

export default App
