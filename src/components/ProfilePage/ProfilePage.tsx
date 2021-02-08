import React from 'react'
import { connect } from 'react-redux'
import style from './ProfilePage.module.css'

const ProfilePage: React.FC = (props: any) => {
  debugger
  return (
    <div className={style.main}>
      <div className={style.headerProfile}>
        <div className={style.userName}>{props.userName}</div>
        <div className={style.subscriptions}>22</div>
        <div className={style.subscribers}>33</div>
      </div>
    </div>
  )
}

let mapStateToPtops = (state: any) => ({
  userName: state.authPage.userName
})


export default connect(mapStateToPtops, {}) (ProfilePage)