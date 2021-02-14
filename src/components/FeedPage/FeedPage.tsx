import React, { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ProfilePosts from '../ProfilePage/ProfilePosts'
import style from './FeedPage.module.css'

const FeedPage: React.FC = (props: any) => {
  const [myPost, setMyPost] = useState<boolean>(false)

  return (
    <div className={style.main}>
      <div className={style.postFilter}>
        <button onClick={() => setMyPost(false)}>Все посты</button>
        <button onClick={() => setMyPost(true)}>Подписки</button>
      </div>
      <div>
        { !myPost ? props.posts.map( (post: any) => <ProfilePosts key={post.id}  post={post.text} like={post.like} /> )  : "my" }  
      </div>
      
      <NavLink to='/profile' className={style.backButton}>В профиль</NavLink>
    </div>
  )
}

let mapStateToPtops = (state: any) => ({
  posts: state.profilePage.posts
})

export default connect(mapStateToPtops, {}) (FeedPage)