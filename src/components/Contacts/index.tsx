import React from 'react'
import style from './style.module.scss'
import { Text } from '../UI/Text'

import Paw from '../../assets/images/lapka.png'
import Lion from '../../assets/images/lion_foot.jpg'
import FormLion from '../../assets/images/lion_contacts.png'

import Container from '../Layout/Container'

import { ContactForm as Form } from '../UI/Form'

import { motion } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'

const Contacts: React.FC = () => {
  return (
    <motion.footer
      id="contacts"
      className={style.Contacts}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.div
        className={style.Content}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <Text.H3 custom={1} variants={TextAnimations.leftToRight}>
          GET IN TOUCH
        </Text.H3>
        <Text.H5 custom={2} variants={TextAnimations.leftToRight}>
          LET'S MAKE GREAT THINGS HAPPEN
        </Text.H5>
      </motion.div>

      <div className={style.Collumns}>
        <motion.div
          className={style.Contact}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <div>
            <span>
              <motion.img
                src={Paw}
                alt="paw"
                custom={0.8}
                variants={TextAnimations.bottomToTop}
              />
              <Text.P custom={1} variants={TextAnimations.bottomToTop}>
                <a href="tel:+380662047960">+38 (066) 204 79 60</a>
              </Text.P>
            </span>
            <span>
              <motion.img
                src={Paw}
                alt="paw"
                custom={1.8}
                variants={TextAnimations.bottomToTop}
              />
              <Text.P custom={2} variants={TextAnimations.bottomToTop}>
                <a href="tel:+380662047960">+38 (066) 204 79 60</a>
              </Text.P>
            </span>
            <span>
              <motion.img
                src={Paw}
                alt="paw"
                custom={2.8}
                variants={TextAnimations.bottomToTop}
              />
              <Text.P custom={3} variants={TextAnimations.bottomToTop}>
                <a href="mailto:contact@leonis.dev">CONTACT@LEONIS.DEV</a>
              </Text.P>
            </span>
          </div>
          <div className={style.Image}>
            <img src={Lion} alt="lion" />
          </div>
        </motion.div>

        <motion.div
          className={style.Form}
          variants={TextAnimations.rightToLeft}
        >
          <img className={style.Image} src={FormLion} alt="" />
          <Form />
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Contacts
