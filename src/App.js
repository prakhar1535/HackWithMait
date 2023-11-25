import React from 'react'
import MainNavbar from './components/MainNavbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Explore from './components/Explore'
import ModalViewer from './components/ModalViewer'
import Nft from './components/Nft'

const App = () => {
  return (
    <BrowserRouter>
        < MainNavbar />
      <Routes>
        <Route path='/' element={<Header/>}/>
        
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/workspace' element={<ModalViewer/>}/>
        <Route path='/nft' element={<Nft/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App