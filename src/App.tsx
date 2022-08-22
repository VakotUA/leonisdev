import React from 'react'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Media from './components/MediaLinks'
import Contacts from './components/Contacts'

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Skills />
      <Portfolio />
      <Media />
      <Contacts />
    </div>
  )
}

export default App
