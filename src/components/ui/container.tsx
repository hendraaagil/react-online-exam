import clsx from 'clsx'
import React from 'react'

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

export const Container = ({ children, className, ...rest }: ContainerProps) => (
  <div
    {...rest}
    className={clsx('flex min-h-screen flex-col px-2 sm:px-4', className)}
  >
    {children}
  </div>
)
