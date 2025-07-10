import React from 'react'
import Login from './pages/loginpage/login'
import { AppRouter } from './router'
const App = () => {
  return (
    <div className='h-screen w-full'>
      <AppRouter/>
    </div>
  )
}

export default App
