import React from 'react'
import style from './style.module.scss'
import Container from '../Layout/Container'
import { Text } from '../UI/Text'

import LionImage from '../../assets/images/lion_portfolio.png'

import { motion } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'

const blockAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.1,
    },
  }),
}

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
    <motion.section className={style.Portfolio}>
      <Container className={style.Content}>
        <Text.H3
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          custom={1}
          variants={TextAnimations.leftToRight}
        >
          OUR PORTFOLIO
        </Text.H3>
        <motion.div
          className={style.Tabs}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <ul>
            <motion.li custom={1} variants={TextAnimations.topToBottom}>
              <Text.P className={style.Active}>ALL</Text.P>
            </motion.li>
            <motion.li custom={2} variants={TextAnimations.topToBottom}>
              <Text.P>LANDING</Text.P>
            </motion.li>
            <motion.li custom={3} variants={TextAnimations.topToBottom}>
              <Text.P>E-COMMERCE</Text.P>
            </motion.li>
            <motion.li custom={4} variants={TextAnimations.topToBottom}>
              <Text.P>DESIGN</Text.P>
            </motion.li>
          </ul>
        </motion.div>
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
    </motion.section>
  )
}

export default Portfolio
