import React from 'react'
import style from './style.module.scss'
import Logo from '../../assets/images/only_lion_logo.png'
import LogoText from '../../assets/images/logo_text_leonis.png'

import Telegram from '../../assets/images/telegram.png'
import Instagram from '../../assets/images/instagram.png'
import Facebook from '../../assets/images/facebook.png'

import Container from '../Layout/Container'

import { MenuButton } from '../UI/MenuButton'
import { useAppSelector } from '../../store/hooks'

import { motion } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'

export const Navigation: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <motion.div className={className}>
      <motion.ul>
        <motion.li custom={0.5} variants={TextAnimations.topToBottom}>
          <a href="/">HOME</a>
        </motion.li>
        <motion.li custom={1} variants={TextAnimations.topToBottom}>
          <a href="/">ABOUT US</a>
        </motion.li>
        <motion.li custom={1.5} variants={TextAnimations.topToBottom}>
          <a href="/">SERVICES</a>
        </motion.li>
        <motion.li custom={2} variants={TextAnimations.topToBottom}>
          <a href="/">PORTFOLIO</a>
        </motion.li>
        <motion.li custom={2.5} variants={TextAnimations.topToBottom}>
          <a href="/">CONTACTS</a>
        </motion.li>
      </motion.ul>
    </motion.div>
  )
}

const Header: React.FC = () => {
  const menu = useAppSelector((state) => state.menu)

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      className={style.Header}
    >
      <Container className={style.Content}>
        <a href="/" className={style.Logo}>
          <motion.img
            custom={0.5}
            variants={TextAnimations.leftToRight}
            src={Logo}
            alt="logo"
          />
          <motion.img
            custom={1}
            variants={TextAnimations.leftToRight}
            src={LogoText}
            alt="text"
          />
        </a>

        <Navigation
          className={`${style.Navigation} ${menu?.isActive && style.Active}`}
        />

        <div className={style.Links}>
          <motion.a custom={0.5} variants={TextAnimations.rightToLeft} href="/">
            <img src={Telegram} alt="" />
          </motion.a>
          <motion.a custom={1} variants={TextAnimations.rightToLeft} href="/">
            <img src={Instagram} alt="" />
          </motion.a>
          <motion.a custom={1.5} variants={TextAnimations.rightToLeft} href="/">
            <img src={Facebook} alt="" />
          </motion.a>

          <div className={style.Burger}>
            <MenuButton />
          </div>
        </div>
      </Container>
    </motion.header>
  )
}

export default Header
