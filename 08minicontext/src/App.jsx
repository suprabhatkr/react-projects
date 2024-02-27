import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <div className='bg-dark center'>
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider>
      
  )
}

export default App
