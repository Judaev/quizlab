import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './SubPage.module.css'

const SubPage = () => {
  return (
    <div className={style.main}>
      <NavLink to='/profile' className={style.title}>Назад</NavLink>
      <div className={style.subItem}>
        <NavLink to='/'>Александр</NavLink>
      </div>
      <div className={style.subItem}>
        <NavLink to='/'>Андрей</NavLink>
      </div>
      <div className={style.subItem}>
        <NavLink to='/'>Артур</NavLink>
      </div>
    </div>
  )
}

export default SubPage