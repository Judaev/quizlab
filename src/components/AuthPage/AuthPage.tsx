import React from 'react'
import style from './AuthPage.module.css'
import { maxLengthCreator, requiredField } from './validators'
import { LoginInput } from './FormsControls'
import { login } from '../../redux/authReducer'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'

const AuthPage: React.FC = (props: any) => {
  const onSubmit = (FormData: any) => {
    props.login(FormData.userName)
  }

  if (props.isAuth) {
    return <Redirect to="/profile" />
  }

  return (
    <div className={style.main}>
      <div className={style.title}>Введите имя</div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const maxLength12 = maxLengthCreator(12)

const LoginForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[requiredField, maxLength12]}
          className={style.input}
          name="userName"
          component={LoginInput}
        />
      </div>
      <div>
        <button className={style.button}>Продолжить</button>
      </div>
    </form>
  )
}

const mapStateToPtops = (state: any) => ({
  isAuth: state.authPage.isAuth,
})

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)

export default connect(mapStateToPtops, { login })(AuthPage)
