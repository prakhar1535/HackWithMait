import React from 'react'
import MainNavbar from './components/MainNavbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Explore from './components/Explore'
import ModalViewer from './components/ModalViewer'
import threeDlibrary from './components/threeDlibrary'

const App = () => {
  return (
    <BrowserRouter>
        < MainNavbar />
      <Routes>
        <Route path='/' element={<Header/>}/>
        
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/workspace' element={<ModalViewer/>}/>
        <Route path='/nft' element={<threeDlibrary/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App