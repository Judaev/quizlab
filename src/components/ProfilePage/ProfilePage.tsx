import React, { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import style from './ProfilePage.module.css'
import ProfilePosts from './ProfilePosts'
import add from '../../images/add.svg'
import AddPost from './AddPost/AddPost'

const ProfilePage: React.FC = (props: any) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={style.main}>
      <div className={style.headerProfile}>
        <div className={style.userName}>{props.userName},</div>
        <div className={style.subscriptions}>{props.subscriptions} подписки,</div>
        <div className={style.subscribers}>{props.subscribers} подписчиков</div>
      </div>
      <button className={style.subButton}>Подписаться</button>
      <ProfilePosts />
      <ProfilePosts />
      <ProfilePosts />
      <div className={style.footer}>
        <NavLink to='/feed'className={style.backButton} >В ленту</NavLink>
        <img className={style.addPost} src={add} onClick={() => setOpen(true)} />
      </div>
      {open && <AddPost />}
    </div>
  )
}

let mapStateToPtops = (state: any) => ({
  userName: state.authPage.userName,
  subscriptions: state.authPage.subscriptions,
  subscribers: state.authPage.subscribers
})


export default connect(mapStateToPtops, {}) (ProfilePage)