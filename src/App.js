import React from 'react'
import MainNavbar from './components/MainNavbar'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      < MainNavbar/>
   </BrowserRouter>
  )
}

export default App