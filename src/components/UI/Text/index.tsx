import React from 'react'
import style from './style.module.scss'

interface Props {
  children?: React.ReactNode
  className?: string
}

const P: React.FC<Props> = ({ children, className }) => {
  return <p className={`${style.p} ${className}`}>{children}</p>
}

const H1: React.FC<Props> = ({ children, className }) => {
  return <h1 className={`${style.h1} ${className}`}>{children}</h1>
}

const H2: React.FC<Props> = ({ children, className }) => {
  return <h2 className={`${style.h2} ${className}`}>{children}</h2>
}

const H3: React.FC<Props> = ({ children, className }) => {
  return <h3 className={`${style.h3} ${className}`}>{children}</h3>
}

const H4: React.FC<Props> = ({ children, className }) => {
  return <h4 className={`${style.h4} ${className}`}>{children}</h4>
}

const H5: React.FC<Props> = ({ children, className }) => {
  return <h5 className={`${style.h5} ${className}`}>{children}</h5>
}

const Small: React.FC<Props> = ({ children, className }) => {
  return <p className={`${style.small} ${className}`}>{children}</p>
}

export const Text = { P, H1, H2, H3, H4, H5, Small }
