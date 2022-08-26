import React from 'react'
import style from './style.module.scss'
import { Text } from '../UI/Text'
import { Separator } from '../UI/Separator'
import { MotionButton } from '../UI/Button'
import { Cross } from '../UI/Particles'
import Circle from '../../assets/images/ellipse.png'

import Container from '../Layout/Container'

import { motion } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'

const Skills: React.FC = () => {
  return (
    <motion.section
      className={style.Skills}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <img src={Circle} alt="circle" className={style.Circle1} />
      <img src={Circle} alt="circle" className={style.Circle2} />

      <Container className={style.Content}>
        <Text.H2 custom={1} variants={TextAnimations.leftToRight}>
          WHAT WE DO
        </Text.H2>
        <Text.H3 custom={2} variants={TextAnimations.leftToRight}>
          OUR SKILLS ARE:
        </Text.H3>

        <div className={style.Collumns}>
          <motion.div
            className={style.Block}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
          >
            <div className={style.Title}>
              <Text.H5
                className={style.CustomLetterSpacing}
                custom={2.5}
                variants={TextAnimations.leftToRight}
              >
                A LOT OF THINGS THAT WE ARE GOOD AT
              </Text.H5>
            </div>

            <ul>
              <motion.li custom={1} variants={TextAnimations.topToBottom}>
                <Text.P>LANDING</Text.P>
              </motion.li>
              <motion.li custom={1.5} variants={TextAnimations.topToBottom}>
                <Text.P>BLOG</Text.P>
              </motion.li>
              <motion.li custom={2} variants={TextAnimations.topToBottom}>
                <Text.P>E-COMMERCE</Text.P>
              </motion.li>
              <motion.li custom={2.5} variants={TextAnimations.topToBottom}>
                <Text.P>WEB CRM</Text.P>
              </motion.li>
              <motion.li custom={3} variants={TextAnimations.topToBottom}>
                <Text.P>UI/UX DESIGN</Text.P>
              </motion.li>
              <motion.li custom={3.5} variants={TextAnimations.topToBottom}>
                <Text.P>HTML5, CSS3</Text.P>
              </motion.li>
              <motion.li custom={4} variants={TextAnimations.topToBottom}>
                <Text.P>JAVASCRIPT, JQUERY, JQUERY UI, VUEJS</Text.P>
              </motion.li>
              <motion.li custom={4.5} variants={TextAnimations.topToBottom}>
                <Text.P>DJANGO, AIOGRAM, SELENIUM</Text.P>
              </motion.li>
              <motion.li custom={5} variants={TextAnimations.topToBottom}>
                <Text.P>MYSQL, POSTGRESQL</Text.P>
              </motion.li>
            </ul>

            <a href="/">
              <MotionButton
                className={style.Button}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5, once: true }}
                custom={2}
                variants={TextAnimations.topToBottom}
              >
                HOW DOES THE MAGIC HAPPEN?
              </MotionButton>
            </a>
          </motion.div>

          <div className={style.Separator}>
            <Cross.Filled size="28px" />
            <Separator />
            <Cross.Filled size="56px" />
          </div>

          <motion.div
            className={style.Block}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
          >
            <div className={style.Title}>
              <Text.H5
                className={style.CustomLetterSpacing}
                custom={2.5}
                variants={TextAnimations.rightToLeft}
              >
                WE BUILD WEBSITES AND APPS, SO YOU DON'T HAVE TO!
              </Text.H5>
            </div>
            <div className={style.Text}>
              <Text.Small custom={4} variants={TextAnimations.rightToLeft}>
                <p>
                  We are born to bring ideas to life, saving up your time and
                  peace for things that really matter.
                  <br />
                  Is it a website, mobile app or just a holiday postcard.
                </p>
              </Text.Small>

              <Text.Small custom={6} variants={TextAnimations.rightToLeft}>
                <p>
                  We make it, testit and keep it running even while you sleep.
                  <br />
                  We find it astonishing how our cooperation makes the world a
                  better place
                </p>
              </Text.Small>
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
}

export default Skills
