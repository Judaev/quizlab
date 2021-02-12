import React from 'react'
import { connect } from 'react-redux'
import style from './ProfilePosts.module.css'
import like from '../../images/like.svg'

const ProfilePosts: React.FC = (props: any) => {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <div className={style.userName}>{props.userName}</div>
        <img className={style.like} src={like} />
      </div>
      <div className={style.content}>Я теперь являюсь разработчиком в Quiz Lab!!!</div>
      <div className={style.likeCount}>Понравипось: Мне и вам</div>
    </div>
  )
}

let mapStateToPtops = (state: any) => ({
  userName: state.authPage.userName,
  subscriptions: state.authPage.subscriptions,
  subscribers: state.authPage.subscribers
})

export default connect(mapStateToPtops, {}) (ProfilePosts)