import React from 'react'
import style from './style.module.scss'
import { Text } from '../UI/Text'
import { Separator } from '../UI/Separator'
import { Button } from '../UI/Button'
import { Cross } from '../UI/Particles'

import Container from '../Layout/Container'

const Skills: React.FC = () => {
  return (
    <section className={style.Skills}>
      <Container className={style.Content}>
        <Text.H2>WHAT WE DO</Text.H2>
        <Text.H3>OUR SKILLS ARE:</Text.H3>

        <div className={style.Collumns}>
          <div className={style.Block}>
            <div className={style.Title}>
              <Text.H5 className={style.CustomLetterSpacing}>
                A LOT OF THINGS THAT WE ARE GOOD AT
              </Text.H5>
            </div>

            <ul>
              <li>
                <Text.P>LANDING</Text.P>
              </li>
              <li>
                <Text.P>BLOG</Text.P>
              </li>
              <li>
                <Text.P>E-COMMERCE</Text.P>
              </li>
              <li>
                <Text.P>WEB CRM</Text.P>
              </li>
              <li>
                <Text.P>UI/UX DESIGN</Text.P>
              </li>
              <li>
                <Text.P>HTML5, CSS3</Text.P>
              </li>
              <li>
                <Text.P>JAVASCRIPT, JQUERY, JQUERY UI, VUEJS</Text.P>
              </li>
              <li>
                <Text.P>DJANGO, AIOGRAM, SELENIUM</Text.P>
              </li>
              <li>
                <Text.P>MYSQL, POSTGRESQL</Text.P>
              </li>
            </ul>

            <a href="/">
              <Button className={style.Button}>
                HOW DOES THE MAGIC HAPPEN?
              </Button>
            </a>
          </div>

          <div className={style.Separator}>
            <Cross.Filled size="28px" />
            <Separator />
            <Cross.Filled size="56px" />
          </div>

          <div className={style.Block}>
            <div className={style.Title}>
              <Text.H5 className={style.CustomLetterSpacing}>
                WE BUILD WEBSITES AND APPS, SO YOU DON'T HAVE TO!
              </Text.H5>
            </div>
            <div className={style.Text}>
              <Text.Small>
                We are born to bring ideas to life, saving up your time and
                peace for things that really matter.
                <br />
                Is it a website, mobile app or just a holiday postcard.
              </Text.Small>

              <Text.Small>
                We make it, testit and keep it running even while you sleep.
                <br />
                We find it astonishing how our cooperation makes the world a
                better place
              </Text.Small>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Skills
