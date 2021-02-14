import { setNewsFeed } from './feedReducer'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  posts: [
    {
      id: 1,
      text: 'Я теперь являюсь разработчиком в Quiz Lab!!!',
      like: {
        userNameLiked: ['Андрей', 'Миша', 'Виктор'],
        liked: false,
      },
    },
    {
      id: 2,
      text: 'Я работаю в самой лучшей компании на свете!',
      like: {
        userNameLiked: ['Андрей', 'Миша', 'Виктор'],
        liked: false,
      },
    },
    {
      id: 3,
      text: 'У меня самая мощная команда! Вместе мы добъемся всего!',
      like: {
        userNameLiked: ['Андрей', 'Миша', 'Виктор'],
        liked: false,
      },
    },
  ],
}

const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 5, text: action.newPost }],
        like: {
          userNameLiked: ['dsf'],
          liked: false,
        },
      }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    default:
      return state
  }
}

export const setUserProfile = (profile: any) => ({
  type: SET_USER_PROFILE,
  profile,
})

export const setLike = (like: boolean) => ({ type: SET_USER_PROFILE, like })

export const addPostActionCreater = (newPost: any) => ({
  type: ADD_POST,
  newPost,
})

export const addPost = (newPost: any) => {
  return (dispatch: any) => {
    dispatch(addPostActionCreater(newPost))
    dispatch(setNewsFeed(newPost))
  }
}

export default profileReducer
