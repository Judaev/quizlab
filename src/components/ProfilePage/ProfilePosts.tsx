import React, { useState } from 'react'
import { connect } from 'react-redux'
import style from './ProfilePosts.module.css'
import like from '../../images/like.svg'
import liked from '../../images/liked.svg'

interface IMyProps {
  userName: string
  key: number
  post: string
  like?: any
}

const ProfilePosts: React.FC<IMyProps> = (props: any) => {
  const [likePost, setLikePost] = useState<boolean>(false)

  return (
    <div className={style.main}>
      <div className={style.header}>
        <div className={style.userName}>{props.userName}</div>
        <img
          className={style.like}
          onClick={() => setLikePost(!likePost)}
          src={!likePost ? like : liked}
        />
      </div>
      <div className={style.content}>{props.post}</div>
      <div className={style.likeCount}>
        Понравилось: 
        {/* {props.like.userNameLiked.map((l: any) => l + ', ')} */}
      </div>
    </div>
  )
}

let mapStateToPtops = (state: any) => ({
  userName: state.authPage.userName,
  subscriptions: state.authPage.subscriptions,
  subscribers: state.authPage.subscribers,
})

export default connect(mapStateToPtops, {})(ProfilePosts)
