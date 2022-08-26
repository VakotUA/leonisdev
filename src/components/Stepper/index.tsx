import React from 'react'
import style from './style.module.scss'
import { Text } from '../UI/Text'
import { Cross } from '../UI/Particles'
import Container from '../Layout/Container'
import Circle from '../../assets/images/ellipse.png'

import { motion } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'

const Stepper: React.FC = () => {
  return (
    <motion.section id="stepper" className={style.Stepper}>
      <img src={Circle} alt="circle" className={style.Circle1} />
      <img src={Circle} alt="circle" className={style.Circle2} />

      <Container>
        <Text.H3
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.75, once: true }}
          variants={TextAnimations.bottomToTop}
        >
          HOW DOES THE MAGIC HAPPEN?
        </Text.H3>
      </Container>

      <motion.div
        className={style.Steps}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: true }}
      >
        <motion.div className={style.Step}>
          <motion.div custom={1} variants={TextAnimations.leftToRight}>
            <small>01</small>
            <Cross.Filled className={style.Icon} />
            <div className={style.Line} />
          </motion.div>
          <Text.P
            custom={2}
            variants={TextAnimations.topToBottom}
            className={style.Title}
          >
            PREPARATION
          </Text.P>
          <Text.Small custom={3} variants={TextAnimations.topToBottom}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ab
            debitis accusantium libero laboriosam, voluptas fugit id commodi
            quasi accusamus nesciunt alias, explicabo quisquam ratione dolorem
            perspiciatis facilis provident, praesentium asperiores error.
            Quisquam culpa officiis alias molestias sunt quo et est possimus, ad
            vel nam voluptas, facere ea odit esse?
          </Text.Small>
        </motion.div>

        <motion.div className={style.Step}>
          <motion.div custom={2} variants={TextAnimations.leftToRight}>
            <small>02</small>
            <Cross.Filled className={style.Icon} />
            <div className={style.Line} />
          </motion.div>
          <Text.P
            custom={3}
            variants={TextAnimations.topToBottom}
            className={style.Title}
          >
            PREPARATION
          </Text.P>
          <Text.Small custom={4} variants={TextAnimations.topToBottom}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ab
            debitis accusantium libero laboriosam, voluptas fugit id commodi
            quasi accusamus nesciunt alias, explicabo quisquam ratione dolorem
            perspiciatis facilis provident, praesentium asperiores error.
            Quisquam culpa officiis alias molestias sunt quo et est possimus, ad
            vel nam voluptas, facere ea odit esse?
          </Text.Small>
        </motion.div>

        <motion.div className={style.Step}>
          <motion.div custom={3} variants={TextAnimations.topToBottom}>
            <small>03</small>
            <Cross.Filled className={style.Icon} />
            <div className={style.Line} />
          </motion.div>
          <Text.P
            custom={4}
            variants={TextAnimations.topToBottom}
            className={style.Title}
          >
            PREPARATION
          </Text.P>
          <Text.Small custom={5} variants={TextAnimations.topToBottom}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ab
            debitis accusantium libero laboriosam, voluptas fugit id commodi
            quasi accusamus nesciunt alias, explicabo quisquam ratione dolorem
            perspiciatis facilis provident, praesentium asperiores error.
            Quisquam culpa officiis alias molestias sunt quo et est possimus, ad
            vel nam voluptas, facere ea odit esse?
          </Text.Small>
        </motion.div>

        <motion.div className={style.Step}>
          <motion.div custom={4} variants={TextAnimations.topToBottom}>
            <small>04</small>
            <Cross.Filled className={style.Icon} />
            <div className={style.Line} />
          </motion.div>
          <Text.P
            custom={5}
            variants={TextAnimations.topToBottom}
            className={style.Title}
          >
            PREPARATION
          </Text.P>
          <Text.Small custom={6} variants={TextAnimations.topToBottom}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ab
            debitis accusantium libero laboriosam, voluptas fugit id commodi
            quasi accusamus nesciunt alias, explicabo quisquam ratione dolorem
            perspiciatis facilis provident, praesentium asperiores error.
            Quisquam culpa officiis alias molestias sunt quo et est possimus, ad
            vel nam voluptas, facere ea odit esse?
          </Text.Small>
        </motion.div>

        <motion.div className={style.Step}>
          <motion.div custom={5} variants={TextAnimations.topToBottom}>
            <small>05</small>
            <Cross.Filled className={style.Icon} />
          </motion.div>
          <Text.P
            custom={6}
            variants={TextAnimations.topToBottom}
            className={style.Title}
          >
            PREPARATION
          </Text.P>
          <Text.Small custom={7} variants={TextAnimations.topToBottom}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ab
            debitis accusantium libero laboriosam, voluptas fugit id commodi
            quasi accusamus nesciunt alias, explicabo quisquam ratione dolorem
            perspiciatis facilis provident, praesentium asperiores error.
            Quisquam culpa officiis alias molestias sunt quo et est possimus, ad
            vel nam voluptas, facere ea odit esse?
          </Text.Small>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Stepper
