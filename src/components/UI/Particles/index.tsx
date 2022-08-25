import React from 'react'
import style from './style.module.scss'

import { ReactComponent as CrossFilled } from '../../../assets/svgs/filled.svg'
import { ReactComponent as CrossOutlined } from '../../../assets/svgs/outlined.svg'

interface Props {
  size?: string
  className?: string
}

const Filled: React.FC<Props> = ({ size = '32px', className }) => {
  return (
    <div className={`${style.Filled} ${className}`} style={{ width: size }}>
      <CrossFilled />
    </div>
  )
}

const Outlined: React.FC<Props> = ({ size = '32px', className }) => {
  return (
    <div className={`${style.Outlined} ${className}`} style={{ width: size }}>
      <CrossOutlined />
    </div>
  )
}

export const Cross = { Filled, Outlined }
