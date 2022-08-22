import React from 'react'
import style from './style.module.scss'
import { Text } from '../UI/Text'

import Paw from '../../assets/images/lapka.png'
import Lion from '../../assets/images/lion_foot.jpg'
import FormLion from '../../assets/images/lion_contacts.png'

import Container from '../Layout/Container'

import { ContactForm as Form } from '../UI/Form'

const Contacts: React.FC = () => {
  return (
    <footer className={style.Contacts}>
      <Container className={style.Content}>
        <Text.H3>GET IN TOUCH</Text.H3>
        <Text.H5>LET'S MAKE GREAT THINGS HAPPEN</Text.H5>

        <div className={style.Collumns}>
          <div className={style.Contact}>
            <span>
              <img src={Paw} alt="paw" />
              <Text.P>
                <a href="tel:+380662047960">+38 (066) 204 79 60</a>
              </Text.P>
            </span>
            <span>
              <img src={Paw} alt="paw" />
              <Text.P>
                <a href="tel:+380662047960">+38 (066) 204 79 60</a>
              </Text.P>
            </span>
            <span>
              <img src={Paw} alt="paw" />
              <Text.P>
                <a href="mailto:contact@leonis.dev">CONTACT@LEONIS.DEV</a>
              </Text.P>
            </span>

            <img className={style.Image} src={Lion} alt="lion" />
          </div>

          <div className={style.Form}>
            <img className={style.Image} src={FormLion} alt="" />
            <Form />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Contacts
