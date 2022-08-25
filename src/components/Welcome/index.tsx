import React from 'react'
import style from './style.module.scss'
import Container from '../Layout/Container'
import { Button } from '../UI/Button'
import { Text } from '../UI/Text'
import { Cross } from '../UI/Particles'
import Circle from '../../assets/images/ellipse.png'

import LionImage from '../../assets/images/lion_main.png'

const Welcome: React.FC = () => {
  return (
    <main className={style.Welcome}>
      <Cross.Filled size="80px" className={style.Particles1} />
      <Cross.Filled size="44px" className={style.Particles2} />
      <Cross.Filled size="52px" className={style.Particles3} />
      <Cross.Outlined className={style.Particles4} />
      <Cross.Outlined className={style.Particles5} />
      <Cross.Filled size="80px" className={style.Particles6} />

      <img src={Circle} alt="circle" className={style.Circle} />

      <Container className={style.Content}>
        <div className={style.Greetings}>
          <Text.H5 className={style.Line}>WE ARE CODE</Text.H5>
          <Text.H5 className={style.Line}>WE ARE DESIGN</Text.H5>

          <Text.H1>LEONIS</Text.H1>
          <Text.H2>DEV STUDIO</Text.H2>

          <Text.H4 className={style.Line}>WE CREATE FOR YOU</Text.H4>
          <Button className={style.Button}>DISCUSS THE PROJECT</Button>
        </div>

        <img className={style.Image} src={LionImage} alt="lion" />
      </Container>
    </main>
  )
}

export default Welcome
