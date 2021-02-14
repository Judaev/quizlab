import style from './AddPost.module.css'


export const Textarea = ({input, meta, ...props}) => {
  const showError = meta.error && meta.touched 

  return(
    <div>
      <div>
        <textarea cols='30' rows='5' autoFocus className={style.textarea} {...input} {...props} />  
      </div>
      { showError && <span>{meta.error}</span>}
    </div>
  )
}

// className={style.form__control + ' ' + (showError ? style.error : '') }