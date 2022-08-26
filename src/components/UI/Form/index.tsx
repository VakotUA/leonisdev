import React, { useState } from 'react'
import style from './style.module.scss'
import { Button } from '../Button'
import { Text } from '../Text'
import { Cross } from '../Particles'

interface IForm {
  name: string
  phone: string
  email: string
  message: string
}

export const ContactForm: React.FC = () => {
  const [details, setDetails] = useState<IForm>({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <form className={style.Form} onSubmit={handleSubmit}>
      <div>
        <Cross.Filled size="64px" className={style.Particles} />
        <Text.H3 className={style.Title}>WRITE A MESSAGE</Text.H3>

        <div className={style.formGroup}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={(e) => {
              setDetails({ ...details, name: e.target.value })
            }}
            value={details.name}
          />
          <label htmlFor="name">
            <Text.P>NAME</Text.P>
          </label>
        </div>

        <div className={style.formGroup}>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            onChange={(e) => {
              setDetails({ ...details, phone: e.target.value })
            }}
            value={details.phone}
            required
          />
          <label htmlFor="phone">
            <Text.P>PHONE NUMBER</Text.P>
          </label>
        </div>

        <div className={style.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) => {
              setDetails({ ...details, email: e.target.value })
            }}
            value={details.email}
            required
          />

          <label htmlFor="email">
            <Text.P>EMAIL</Text.P>
          </label>
        </div>

        <div className={style.formGroup}>
          <textarea
            name="message"
            placeholder="Message"
            onChange={(e) => {
              setDetails({ ...details, message: e.target.value })
            }}
            value={details.message}
            required
          />
          <label htmlFor="phone">
            <Text.P>MESSAGE</Text.P>
          </label>
        </div>

        <Button className={style.Button} type="submit">
          SEND MESSAGE
        </Button>
      </div>
    </form>
  )
}