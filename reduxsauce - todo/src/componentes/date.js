import React from 'react'

const FormatterDate = ({children}) => {
    const date = children
    return <span>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</span>
}

export default FormatterDate