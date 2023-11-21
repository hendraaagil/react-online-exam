import clsx from 'clsx'
import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
  name: string
}

export const Input = ({ className, id, label, ...rest }: InputProps) => (
  <>
    <label htmlFor={id} className="pb-2">
      {label}
    </label>
    <input
      {...rest}
      id={id}
      className={clsx(
        'rounded px-3 py-2 ring-blue-500 focus:outline-none focus:ring-2 focus-visible:ring-2',
        className,
      )}
    />
  </>
)
