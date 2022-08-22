import React from 'react'
import Container from '../Layout/Container'
import { Text } from '../UI/Text'
import style from './style.module.scss'

import EyesImage from '../../assets/images/lion_eyes.jpg'

import Telegram from '../../assets/images/telegram.png'
import Instagram from '../../assets/images/instagram.png'
import LinkedIn from '../../assets/images/linkedin.png'
import Facebook from '../../assets/images/facebook.png'
import Twitter from '../../assets/images/twitter.png'
import YouTube from '../../assets/images/youtube.png'

const Media: React.FC = () => {
  return (
    <section className={style.Media}>
      <Container className={style.Content}>
        <Text.H3>JOIN OUR PRIDE</Text.H3>
      </Container>

      <div
        className={style.Background}
        style={{ backgroundImage: `url(${EyesImage})` }}
      >
        <Container>
          <ul>
            <li>
              <a href="/">
                <img src={Telegram} alt="telegram" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Instagram} alt="telegram" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={LinkedIn} alt="telegram" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Facebook} alt="telegram" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Twitter} alt="telegram" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={YouTube} alt="telegram" />
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </section>
  )
}

export default Media
