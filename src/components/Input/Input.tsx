import clsx from 'clsx'
import React, { useId } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string
}

export const Input = ({ title, className, ...rest }: InputProps) => {
  const id = useId()
  return (
    <div>
      <label
        htmlFor={id}
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {title}
      </label>
      <div className='mt-2'>
        <input
          id={id}
          {...rest}
          className={clsx(
            'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
            className
          )}
        />
      </div>
    </div>
  )
}

export default Input
