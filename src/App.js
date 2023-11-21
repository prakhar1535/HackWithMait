import React from 'react'
import MainNavbar from './components/MainNavbar'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
      < MainNavbar/>
      <Header/>
   </BrowserRouter>
  )
}

export default App