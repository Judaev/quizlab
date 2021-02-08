import {  ThunkAction, Action, combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'


// const store = configureStore({
//   reducer: {
//     authPage: authReducer
//   },
// });

let reducers = combineReducers({
  authPage: authReducer,
  form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store
