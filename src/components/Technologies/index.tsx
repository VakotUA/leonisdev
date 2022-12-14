import React from 'react'
import style from './style.module.scss'

import Container from '../Layout/Container'
import { Text } from '../UI/Text'
import { motion } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'
import { Cross } from '../UI/Particles'

import CSS from '../../assets/images/css.png'
import Ai from '../../assets/images/ai.png'
import Ps from '../../assets/images/ps.png'
import Django from '../../assets/images/django.png'
import HTML from '../../assets/images/html5.png'
import JQUI from '../../assets/images/jq_ui.png'
import Jquery from '../../assets/images/jquery.png'
import JS from '../../assets/images/js.png'
import MySQL from '../../assets/images/mySql.png'
import Python from '../../assets/images/pyton.png'
import ReactIMG from '../../assets/images/react.png'
import Selenium from '../../assets/images/Selenium.png'
import VueJS from '../../assets/images/VueJS.png'

import Image from '../../assets/images/lion_2(bgfree).png'
import Circle from '../../assets/images/ellipse.png'

const Technologies: React.FC = () => {
  return (
    <motion.section
      id="technologies"
      className={style.Technologies}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <img className={style.Image} src={Image} alt="lion" />
      <img src={Circle} alt="circle" className={style.Circle} />

      <Container className={style.Content}>
        <motion.div className={style.Title}>
          <div>
            <Text.H3 custom={1} variants={TextAnimations.leftToRight}>
              TECHNOLOGIES
            </Text.H3>
            <Text.P
              className={style.CustomLetterSpacing}
              custom={2.5}
              variants={TextAnimations.leftToRight}
            >
              A LOT OF THINGS THAT WE ARE GOOD AT
            </Text.P>
          </div>
          <div>
            <Cross.Filled size="56px" />
          </div>
        </motion.div>
        <motion.div
          className={style.List}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <ul>
            <motion.li custom={1} variants={TextAnimations.topToBottom}>
              <img src={HTML} alt="html" />
            </motion.li>
            <motion.li custom={2} variants={TextAnimations.topToBottom}>
              <img src={CSS} alt="css" />
            </motion.li>
            <motion.li custom={3} variants={TextAnimations.topToBottom}>
              <img src={JS} alt="js" />
            </motion.li>
            <motion.li custom={4} variants={TextAnimations.topToBottom}>
              <img src={Jquery} alt="jquery" />
            </motion.li>
            <motion.li custom={5} variants={TextAnimations.topToBottom}>
              <img src={JQUI} alt="jqui" />
            </motion.li>
            <motion.li custom={6} variants={TextAnimations.topToBottom}>
              <img src={Ps} alt="pa" />
            </motion.li>
            <motion.li custom={7} variants={TextAnimations.topToBottom}>
              <img src={Ai} alt="ai" />
            </motion.li>
            <motion.li custom={8} variants={TextAnimations.topToBottom}>
              <img src={Django} alt="django" />
            </motion.li>
            <motion.li custom={9} variants={TextAnimations.topToBottom}>
              <img src={Selenium} alt="selenium" />
            </motion.li>
            <motion.li custom={10} variants={TextAnimations.topToBottom}>
              <img src={ReactIMG} alt="react" />
            </motion.li>
            <motion.li custom={11} variants={TextAnimations.topToBottom}>
              <img src={Python} alt="python" />
            </motion.li>
            <motion.li custom={12} variants={TextAnimations.topToBottom}>
              <img src={VueJS} alt="vuejs" />
            </motion.li>
            <motion.li custom={13} variants={TextAnimations.topToBottom}>
              <img src={MySQL} alt="mysql" />
            </motion.li>
          </ul>
        </motion.div>
      </Container>
    </motion.section>
  )
}

export default Technologies
