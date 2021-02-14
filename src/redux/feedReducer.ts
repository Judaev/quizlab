const SET_NEWS = 'SET_NEWS'

let initialState = {
  news: [],
}

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: [...state.news, ...action.news],
      }
    default:
      return state
  }
}

export const setNewsAC = (news: any) => ({
  type: SET_NEWS,
  news,
})

export const setNewsFeed = (news: any) => {
  return (dispatch: any) => {
    dispatch(setNewsAC(news))
  }
}

export default authReducer
