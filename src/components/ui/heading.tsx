import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const styles = tv({
  base: 'font-bold',
  variants: {
    size: {
      h1: 'text-3xl',
      h2: 'text-2xl',
      h3: 'text-xl',
    },
  },
  defaultVariants: {
    size: 'h1',
  },
})

type HeadingVariants = VariantProps<typeof styles>

type HeadingProps = React.BaseHTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode
}

export const Heading = ({
  size,
  children,
  ...rest
}: HeadingProps & HeadingVariants) => {
  return React.createElement(
    size || 'h1',
    { className: styles({ size: size }), ...rest },
    children,
  )
}
