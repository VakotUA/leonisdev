import React from 'react'
import Welcome from '../../components/Welcome'
import Skills from '../../components/Skills'
import Portfolio from '../../components/Portfolio'

const Home: React.FC = () => {
  return (
    <>
      <Welcome />
      <Skills />
      <Portfolio />
    </>
  )
}

export default Home
