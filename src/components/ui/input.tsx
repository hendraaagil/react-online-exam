import clsx from 'clsx'
import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
  name: string
}

export const Input = ({
  className,
  id,
  label,
  name,
  type,
  ...rest
}: InputProps) => {
  if (type === 'radio') {
    return (
      <div className="flex space-x-2 rounded bg-gray-400 bg-opacity-25 px-2 py-2 transition-colors hover:bg-opacity-75">
        <input
          {...rest}
          type={type}
          name={name}
          id={id}
          className={clsx(
            'cursor-pointer rounded px-3 py-2 ring-blue-500 focus:outline-none focus:ring-2 focus-visible:ring-2',
            className,
          )}
        />
        <label htmlFor={id} className="flex w-full cursor-pointer">
          {label}
        </label>
      </div>
    )
  }

  return (
    <>
      <label htmlFor={id} className="pb-2">
        {label}
      </label>
      <input
        {...rest}
        type={type}
        name={name}
        id={id}
        className={clsx(
          'rounded px-3 py-2 ring-blue-500 focus:outline-none focus:ring-2 focus-visible:ring-2',
          className,
        )}
      />
    </>
  )
}
