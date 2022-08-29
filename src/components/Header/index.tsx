import React from 'react'
import style from './style.module.scss'
import { ReactComponent as LogoSVG } from '../../assets/svgs/lion_logo_text_white.svg'

import Telegram from '../../assets/images/telegram.png'
import Instagram from '../../assets/images/instagram.png'
import Facebook from '../../assets/images/facebook.png'

import Container from '../Layout/Container'

import { MenuButton } from '../UI/MenuButton'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { menuSlice } from '../../store/reducers/menu'

import { motion } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'

import { HashLink as Link } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'

export const Navigation: React.FC<{ className?: string }> = ({ className }) => {
  const dispatch = useAppDispatch()
  const { toggleMenu } = menuSlice.actions

  return (
    <motion.div className={className} id="nav">
      <motion.ul>
        <motion.li custom={0.5} variants={TextAnimations.topToBottom}>
          <Link to="" onClick={() => dispatch(toggleMenu(false))}>
            HOME
          </Link>
        </motion.li>
        <motion.li custom={1} variants={TextAnimations.topToBottom}>
          <Link to="/#about" onClick={() => dispatch(toggleMenu(false))}>
            ABOUT US
          </Link>
        </motion.li>
        <motion.li custom={1.5} variants={TextAnimations.topToBottom}>
          <Link
            to="/magic#services"
            onClick={() => dispatch(toggleMenu(false))}
          >
            SERVICES
          </Link>
        </motion.li>
        <motion.li custom={2} variants={TextAnimations.topToBottom}>
          <Link to="/#portfolio" onClick={() => dispatch(toggleMenu(false))}>
            PORTFOLIO
          </Link>
        </motion.li>
        <motion.li custom={2.5} variants={TextAnimations.topToBottom}>
          <Link to="#contacts" onClick={() => dispatch(toggleMenu(false))}>
            CONTACTS
          </Link>
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
        <motion.div custom={2} variants={TextAnimations.leftToRight}>
          <NavLink to="/">
            <LogoSVG className={style.Logo} />
          </NavLink>
        </motion.div>

        <Navigation
          className={`${style.Navigation} ${menu?.isActive && style.Active}`}
        />

        <div className={style.Links}>
          <motion.a custom={0.5} variants={TextAnimations.rightToLeft} href="/">
            <img src={Telegram} alt="telegram" />
          </motion.a>
          <motion.a custom={1} variants={TextAnimations.rightToLeft} href="/">
            <img src={Instagram} alt="instagram" />
          </motion.a>
          <motion.a custom={1.5} variants={TextAnimations.rightToLeft} href="/">
            <img src={Facebook} alt="facebook" />
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
