export const LoginInput = ({input, meta, ...props}) => {
  const showError = meta.error && meta.touched 

  return(
    <div>
      { showError && <span>{meta.error}</span>}
      <div>
        <input {...input} {...props} />  
      </div>
      
    </div>
  )
}