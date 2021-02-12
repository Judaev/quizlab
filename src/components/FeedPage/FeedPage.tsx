import React from 'react'
import { NavLink } from 'react-router-dom'
import ProfilePosts from '../ProfilePage/ProfilePosts'
import style from './FeedPage.module.css'

const FeedPage: React.FC = (props: any) => {
  return (
    <div className={style.main}>
      <div className={style.postFilter}>
        <button>Все посты</button>
        <button>Подписки</button>
      </div>
      <ProfilePosts />
      <ProfilePosts />
      <ProfilePosts />
      <NavLink to='/profile' className={style.footer}>В профиль</NavLink>
    </div>
  )
}

export default FeedPage