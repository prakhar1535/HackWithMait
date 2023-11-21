import React from 'react'
import MainNavbar from './components/MainNavbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Explore from './components/Explore'

const App = () => {
  return (
    <BrowserRouter>
        < MainNavbar />
      <Routes>
        <Route path='/' element={<Header/>}/>
        
        <Route path='/explore' element={<Explore/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App