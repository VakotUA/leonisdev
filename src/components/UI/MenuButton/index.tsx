import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { menuSlice } from '../../../store/reducers/menu'
import style from './style.module.scss'

export const MenuButton: React.FC<{ className?: string }> = ({ className }) => {
  const { isActive } = useAppSelector((state) => state.menu)
  const dispatch = useAppDispatch()
  const { toggleMenu } = menuSlice.actions

  useEffect(() => {
    isActive
      ? document.body.classList.add('scroll-lock')
      : document.body.classList.remove('scroll-lock')
  }, [isActive])

  return (
    <div
      className={` ${style.MenuButton} ${
        isActive && style.Active
      } ${className}`}
      onClick={() => dispatch(toggleMenu(!isActive))}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
