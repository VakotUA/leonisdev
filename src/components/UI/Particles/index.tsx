import React from 'react'
import style from './style.module.scss'

import { ReactComponent as CrossFilled } from '../../../assets/svgs/filled.svg'
import { ReactComponent as CrossOutlined } from '../../../assets/svgs/outlined.svg'

interface Props {
  size?: string
}

const Filled: React.FC<Props> = ({ size = '32px' }) => {
  return (
    <div className={style.Filled} style={{ width: size }}>
      <CrossFilled />
    </div>
  )
}

const Outlined: React.FC<Props> = ({ size = '32px' }) => {
  return (
    <div className={style.Outlined} style={{ width: size }}>
      <CrossOutlined />
    </div>
  )
}

export const Cross = { Filled, Outlined }
