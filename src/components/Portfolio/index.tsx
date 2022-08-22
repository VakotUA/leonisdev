import React from 'react'
import style from './style.module.scss'
import Container from '../Layout/Container'
import { Text } from '../UI/Text'

import LionImage from '../../assets/images/lion_portfolio.png'

export const config = [
  {
    title: '',
    content: '',
  },
  {
    title: '',
    content: '',
  },
  {
    title: '',
    content: '',
  },
  {
    title: '',
    content: '',
  },
]

const Portfolio: React.FC = () => {
  return (
    <section className={style.Portfolio}>
      <Container className={style.Content}>
        <Text.H3>OUR PORTFOLIO</Text.H3>
        <div className={style.Tabs}>
          <ul>
            <li className={style.Active}>
              <Text.P>ALL</Text.P>
            </li>
            <li>
              <Text.P>LANDING</Text.P>
            </li>
            <li>
              <Text.P>E-COMMERCE</Text.P>
            </li>
            <li>
              <Text.P>DESIGN</Text.P>
            </li>
          </ul>
        </div>
      </Container>

      <div className={style.TabContent}>
        <img className={style.Image} src={LionImage} alt="lion" />

        <ul>
          {config &&
            config.map((item, index) => (
              <li key={index}>
                <Text.H5>{item.title}</Text.H5>
                <div>{item.content}</div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}

export default Portfolio
