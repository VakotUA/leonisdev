import React from 'react'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Media from './components/MediaLinks'
import Contacts from './components/Contacts'

import ScrollToTop from './helpers/scrollToTop'

import Home from './pages/Home'
import Magic from './pages/Magic'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/magic" element={<Magic />} />
        </Routes>
        <Contacts />
      </ScrollToTop>
    </div>
  )
}

export default App
