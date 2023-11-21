type AnswerOptionProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
  name: string
}

export const AnswerOption = ({ id, label, ...rest }: AnswerOptionProps) => (
  <div className="flex space-x-2 rounded bg-gray-400 bg-opacity-25 px-2 py-2 transition-colors hover:bg-opacity-75">
    <input
      {...rest}
      type="radio"
      id={id}
      className="cursor-pointer rounded px-3 py-2 ring-blue-500 focus:outline-none focus:ring-2 focus-visible:ring-2"
    />
    <label htmlFor={id} className="flex w-full cursor-pointer">
      {label}
    </label>
  </div>
)
