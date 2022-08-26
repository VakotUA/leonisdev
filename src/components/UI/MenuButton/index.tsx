import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { menuSlice } from '../../../store/reducers/menu'
import style from './style.module.scss'

export const MenuButton: React.FC<{ className?: string }> = ({ className }) => {
  const { isActive } = useAppSelector((state) => state.menu)
  const dispatch = useAppDispatch()
  const { toggleMenu } = menuSlice.actions

  return (
    <div
      className={` ${style.MenuButton} ${
        isActive && style.Active
      } ${className}`}
      onClick={() => dispatch(toggleMenu())}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
