import React from 'react'
import Welcome from '../../components/Welcome'
import Skills from '../../components/Skills'
import Portfolio from '../../components/Portfolio'
import Media from '../../components/MediaLinks'

const Home: React.FC = () => {
  return (
    <>
      <Welcome />
      <Skills />
      <Portfolio />
      <Media />
    </>
  )
}

export default Home
