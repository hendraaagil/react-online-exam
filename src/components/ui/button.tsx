import clsx from 'clsx'
import { tv, type VariantProps } from 'tailwind-variants'

const styles = tv({
  base: 'rounded px-4 py-2 font-medium transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60',
  variants: {
    color: {
      neutral: 'bg-zinc-700 text-white',
      green: 'bg-green-700 text-white',
      red: 'bg-red-700 text-white',
    },
  },
  defaultVariants: {
    color: 'neutral',
  },
})

type ButtonVariants = VariantProps<typeof styles>

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export const Button = ({
  color,
  children,
  className,
  ...rest
}: ButtonProps & ButtonVariants) => {
  return (
    <button {...rest} className={clsx(styles({ color }), className)}>
      {children}
    </button>
  )
}
