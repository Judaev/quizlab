export const requiredField = (value) => {
  if (value) {
    return undefined
  } else {
    return 'Error message'
  }
}

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) {
    return `Максимальная длина ${maxLength} символов`
  } else {
    return undefined
  }
}