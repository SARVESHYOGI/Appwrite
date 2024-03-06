import React, { useId } from 'react'

function Select(
    {
        options,
        label,
        className = '',
        ...props
    }, ref
) {
    const id = useId();
    return (
        <div className='w-full'>

            {label &&
                <label
                    htmlFor={id}
                    className='inline-block mb-1 pl-1'>
                    {label}
                </label>
            }
            <select {...props} name="" id={id}
                className={`${className}  px-6 py-2 duration-200 hover:bg-blue-100 rounded-full`}
                ref={ref}>
                {
                    options?.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default React.forwardRef(Select)