const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
  userId: null,
  userName: 'Denis',
  isAuth: false
}

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.userName,
        isAuth: true
      }
    default:
      return state
  }
}

export const setAuthUserData = (userName: any) => ({
  type: SET_USER_DATA,
  userName
})

export const login = (userName: any) => {
  return (dispatch: any) => {
    dispatch(setAuthUserData(userName))
  }
}

export default authReducer
