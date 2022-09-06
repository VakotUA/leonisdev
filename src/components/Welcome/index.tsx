import React, { useState } from 'react'
import style from './style.module.scss'
import Container from '../Layout/Container'
import { MotionButton } from '../UI/Button'
import { Text } from '../UI/Text'
import { Cross } from '../UI/Particles'
import Circle from '../../assets/images/ellipse.png'

import LionImage from '../../assets/images/lion_main.png'

import { motion, AnimatePresence } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'

import DiscussModal from '../DiscussForm'

const Welcome: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  return (
    <>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isModalVisible && (
          <DiscussModal
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        )}
      </AnimatePresence>

      <motion.main
        className={style.Welcome}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: true }}
      >
        <Container className={style.Content}>
          <div className={style.Greetings}>
            <div />
            <div>
              <Text.H5
                custom={1}
                variants={TextAnimations.leftToRight}
                className={style.Line}
              >
                WE ARE CODE
              </Text.H5>
              <Text.H5
                custom={1}
                variants={TextAnimations.leftToRight}
                className={style.Line}
              >
                WE ARE DESIGN
              </Text.H5>

              <Text.H1 custom={3} variants={TextAnimations.leftToRight}>
                LEONIS
              </Text.H1>
              <Text.H2 custom={4} variants={TextAnimations.leftToRight}>
                DEV STUDIO
              </Text.H2>

              <Text.H4
                custom={5}
                variants={TextAnimations.leftToRight}
                className={style.Line}
              >
                WE CREATE FOR YOU
              </Text.H4>
            </div>

            <MotionButton
              custom={6}
              variants={TextAnimations.leftToRight}
              className={style.Button}
              onClick={() => setIsModalVisible(!isModalVisible)}
            >
              DISCUSS THE PROJECT
            </MotionButton>
          </div>

          <img className={style.Image} src={LionImage} alt="lion" />
        </Container>

        <Cross.Filled size="80px" className={style.Particles1} />
        <Cross.Filled size="44px" className={style.Particles2} />
        <Cross.Filled size="52px" className={style.Particles3} />
        <Cross.Outlined className={style.Particles4} />
        <Cross.Outlined className={style.Particles5} />
        <Cross.Filled size="80px" className={style.Particles6} />

        <img src={Circle} alt="circle" className={style.Circle} />
      </motion.main>
    </>
  )
}

export default Welcome
