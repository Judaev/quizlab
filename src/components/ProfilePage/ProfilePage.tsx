import React, { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import style from './ProfilePage.module.css'
import ProfilePosts from './ProfilePosts'
import add from '../../images/add.svg'
import AddPost from './AddPost/AddPost'



const ProfilePage: React.FC = (props: any) => {
  const [open, setOpen] = useState(false)

  let postElement = props.posts
  .map( (post: any) => <ProfilePosts key={post.id}  post={post.text} like={post.like} />)

  return (
    <div className={style.main}>
      <div className={style.headerProfile}>
        <div className={style.userName}>{props.userName},</div>
        <NavLink to='/subscriptions' className={style.subscriptions}>{props.subscriptions} подписки,</NavLink>
        <div className={style.subscribers}>{props.subscribers} подписчиков</div>
      </div>
      <button className={style.subButton}>Подписаться</button>
      {postElement}
      <div className={style.footer}>
        <NavLink to='/feed'className={style.backButton} >В ленту</NavLink>
        <img className={style.addPost} src={add} onClick={() => setOpen(!open)} />
      </div>
      {open && <AddPost setOpen={setOpen} />}
    </div>
  )
}

let mapStateToPtops = (state: any) => ({
  userName: state.authPage.userName,
  subscriptions: state.authPage.subscriptions,
  subscribers: state.authPage.subscribers,
  posts: state.profilePage.posts
})


export default connect(mapStateToPtops, {}) (ProfilePage)