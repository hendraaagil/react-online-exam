import { Heading } from '@/components/ui'
import { Link } from 'react-router-dom'

export const Header = ({ title }: { title: string }) => (
  <header className="flex flex-col-reverse items-center justify-between border-b border-gray-700 py-4 sm:flex-row">
    <Heading className="mt-2 sm:mt-0">{title}</Heading>
    <Link
      to="/dashboard"
      className="w-full rounded bg-gray-400 bg-opacity-50 px-4 py-2 text-center font-medium transition-colors hover:bg-opacity-100 sm:w-fit"
    >
      Back to Dashboard
    </Link>
  </header>
)
