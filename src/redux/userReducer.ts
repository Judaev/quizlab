let initialState = {
  userId: 1,
  userName: 'Денис',
  subsribers: {
    1: {
      userId: 1532,
      userName: 'Влад',
    },
    2: {
      userId: 9648,
      userName: 'Андрей',
    },
  },
  likes: {
    1: {
      postId: 12323,
    },
    2: {
      postId: 3421,
    },
    3: {
      postId: 9845,
    },
  },
}

const userReducer = (state = initialState, action: any) => {}

export default userReducer
