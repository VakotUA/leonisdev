import React, { useState } from 'react'
import style from './style.module.scss'
import Logo from '../../assets/images/only_lion_logo.png'
import LogoText from '../../assets/images/logo_text_leonis.png'

import Telegram from '../../assets/images/telegram.png'
import Instagram from '../../assets/images/instagram.png'
import Facebook from '../../assets/images/facebook.png'

import Container from '../Layout/Container'

import { MenuButton } from '../UI/MenuButton'
import { useAppSelector } from '../../store/hooks'

const Header: React.FC = () => {
  const menu = useAppSelector((state) => state.menu)

  return (
    <section className={style.Header}>
      <Container className={style.Content}>
        <a href="/" className={style.Logo}>
          <img src={Logo} alt="logo" />
          <img src={LogoText} alt="text" />
        </a>

        <div className={`${style.Navigation} ${menu.isActive && style.Active}`}>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">ABOUT US</a>
            </li>
            <li>
              <a href="/">SERVICES</a>
            </li>
            <li>
              <a href="/">PORTFOLIO</a>
            </li>
            <li>
              <a href="/">CONTACTS</a>
            </li>
          </ul>
        </div>

        <div className={style.Links}>
          <a href="/">
            <img src={Telegram} alt="" />
          </a>
          <a href="/">
            <img src={Instagram} alt="" />
          </a>
          <a href="/">
            <img src={Facebook} alt="" />
          </a>

          <div className={style.Menu}>
            <MenuButton />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Header
