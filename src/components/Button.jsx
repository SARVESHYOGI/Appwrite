import React from 'react'

function Button({ Children,
    type = 'button',
    bgColor = 'bg-blue-500',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    return (
        <button
            className={`${className} ${bgColor} ${textColor} px-6 py-2 duration-200 hover:bg-blue-100 rounded-full`}{...props}
        >{Children}</button>
    )
}

export default Button