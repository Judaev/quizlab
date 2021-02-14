import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './AddPost.module.css'
import { Textarea } from './Textarea'
import { addPost } from '../../../redux/profileReducer'
import { connect } from 'react-redux'

const AddPost: React.FC<{setOpen(value: boolean): void}> = (props: any) => {
  let addNewPost = (values: any) => {
    props.addPost(values.newPost)
  }

  return (
    <div className={style.main}>
      <div className={style.title}>Новый пост</div>
      <AddPostFormRedux onSubmit={addNewPost} />
      <button className={style.closeButton} onClick={() => props.setOpen(false)}>Закрыть</button>
    </div>
  )
}

const AddPostForm = (props: any) => {
  return(
    <form onSubmit={props.handleSubmit} className={style.createPost}>
      <Field placeholder='Чем хотите поделиться?' name='newPost' component={Textarea} />
      <button className={style.addPostButton}>Опубликовать</button>
    </form>
  )
}

const AddPostFormRedux = reduxForm({
  form: 'addText'
}) (AddPostForm)

export default connect(null, {addPost}) (AddPost)