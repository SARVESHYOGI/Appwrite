import React, { useId } from 'react'

const Input = React.forwardRef(function Input(
    {
        label,
        type = 'text',
        className = '',
        ...props
    },
    ref
) {
    const id = useId(props.id)
    return (

        <div className='w-full'>
            {label &&
                <label
                    htmlFor={id}
                    className='inline-block mb-1 pl-1'>
                    {label}
                </label>
            }
            <input type={text}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-500 duration-200 border border-gray-300 w-full ${className}`}
                ref={ref}
                id={id}
                {...props}
            />


        </div>
    )
})

export default Input