import React from 'react'
import style from './style.module.scss'
import Container from '../Layout/Container'
import { MotionButton } from '../UI/Button'
import { Text } from '../UI/Text'
import { Cross } from '../UI/Particles'
import Circle from '../../assets/images/ellipse.png'

import LionImage from '../../assets/images/lion_main.png'

import { motion } from 'framer-motion'

const textAnimation = {
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

const Welcome: React.FC = () => {
  return (
    <motion.main
      className={style.Welcome}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
    >
      <Cross.Filled size="80px" className={style.Particles1} />
      <Cross.Filled size="44px" className={style.Particles2} />
      <Cross.Filled size="52px" className={style.Particles3} />
      <Cross.Outlined className={style.Particles4} />
      <Cross.Outlined className={style.Particles5} />
      <Cross.Filled size="80px" className={style.Particles6} />

      <img src={Circle} alt="circle" className={style.Circle} />

      <Container className={style.Content}>
        <div className={style.Greetings}>
          <Text.H5 custom={1} variants={textAnimation} className={style.Line}>
            WE ARE CODE
          </Text.H5>
          <Text.H5 custom={1} variants={textAnimation} className={style.Line}>
            WE ARE DESIGN
          </Text.H5>

          <Text.H1 custom={3} variants={textAnimation}>
            LEONIS
          </Text.H1>
          <Text.H2 custom={4} variants={textAnimation}>
            DEV STUDIO
          </Text.H2>

          <Text.H4 custom={5} variants={textAnimation} className={style.Line}>
            WE CREATE FOR YOU
          </Text.H4>
          <MotionButton
            custom={6}
            variants={textAnimation}
            className={style.Button}
          >
            DISCUSS THE PROJECT
          </MotionButton>
        </div>

        <img className={style.Image} src={LionImage} alt="lion" />
      </Container>
    </motion.main>
  )
}

export default Welcome
