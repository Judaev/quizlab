// import { compose } from '@reduxjs/toolkit'
import { compose } from 'redux'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'
import './App.css'
import AuthPage from './components/AuthPage/AuthPage'
import ProfilePage from './components/ProfilePage/ProfilePage'

interface IMyProps {
  isAuth: boolean
}

interface IMyState {

}

class App extends React.Component<IMyProps, IMyState> {
  componentDidMount() {
    // this.props.initializeApp()
  }

  

  render() {
    if (this.props.isAuth) {
    return <Redirect to='/profile' />
    }
    return (
      <div>
        <Route path='/quizlab' render={ () => <AuthPage />}  />
        <Route path="/profile" render={ () => <ProfilePage /> } />
      </div>
    )  
  }
  
}

const mapStateToPtops = (state: any) => ({
  isAuth: state.authPage.isAuth,
})

export default compose(
  
  connect(mapStateToPtops, {}))
  (App)
