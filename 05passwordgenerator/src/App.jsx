import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false) 
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }

    setPassword(pass) 
  }, [length, numberAllowed, charAllowed])

  const changePassword = useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500 text-white'>
        <h1 className='text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 text-orange-600'>
          <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button 
          className='outline-none bg-blue-800 shadow-lg p-1 text-white'
          onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex flex-row items-center gap-x-5'>
          <div className='flex w-60 items-center gap-x-2'>
            <input
            type='range'
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}/>
            <div>Length</div>
            <div>{length}</div>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            className='checkbox'/>
            <label htmlFor='numberAllowed'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            className='checkbox'/>
            <label htmlFor='charAllowed'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
