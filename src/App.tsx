// import { compose } from '@reduxjs/toolkit'
import { compose } from 'redux'
import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import './App.css'
import AuthPage from './components/AuthPage/AuthPage'
import ProfilePage from './components/ProfilePage/ProfilePage'
import FeedPage from './components/FeedPage/FeedPage'
import SubPage from './components/SubPage/SubPage'

interface IMyProps {
  isAuth: any
}

interface IMyState {}

const App: React.FC<IMyProps> = (props: any) => {
  

  return (
    <div>
      <Route exact path="/quizlab"  render={() => <AuthPage />} />
      <Route path="/profile"        render={() => <ProfilePage />} />
      <Route path="/feed"           render={() => <FeedPage />} />
      <Route path="/subscriptions"  render={() => <SubPage />} />
    </div>
  )
}

const mapStateToPtops = (state: any) => ({
  isAuth: state.authPage.isAuth,
})

export default compose(connect(mapStateToPtops, {}))(App)
