import React from 'react'
import style from './style.module.scss'
import Container from '../Layout/Container'
import { Button } from '../UI/Button'
import { Text } from '../UI/Text'

import LionImage from '../../assets/images/lion_main.png'

const Welcome: React.FC = () => {
  return (
    <main className={style.Welcome}>
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
