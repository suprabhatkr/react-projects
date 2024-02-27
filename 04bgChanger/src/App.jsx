import { useState } from "react"
function App() {
  const [color, setColor] = useState('olive')

  const colors = ["red", "green", "blue", "purple", "pink"]

  return (
    <div className="w-full h-screen duration-200" style = {{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white p-3 py-2 rounded-3xl shadow-lg">
          {colors.map(bgColor => (
            <button 
            key={bgColor}
            onClick={() => setColor(bgColor)}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            style={{ backgroundColor: bgColor }}
            >{bgColor}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
