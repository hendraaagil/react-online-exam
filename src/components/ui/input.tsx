import clsx from 'clsx'
import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
  name: string
}

export const Input = ({ className, id, label, name, ...rest }: InputProps) => {
  return (
    <>
      <label htmlFor={id} className="pb-2">
        {label}
      </label>
      <input
        {...rest}
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
