import React from 'react'
import style from './style.module.scss'

interface Props {
  type?: 'submit' | 'reset' | 'button'
  children?: React.ReactNode
  className?: string
}

export const Button: React.FC<Props> = ({ type, children, className }) => {
  return (
    <button type={type} className={`${style.Button} ${className}`}>
      {children}
    </button>
  )
}
