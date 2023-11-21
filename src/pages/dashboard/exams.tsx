import { Timer } from 'lucide-react'
import { Link, useRouteLoaderData } from 'react-router-dom'

import { Exam } from '@/_data/exams'
import { Heading } from '@/components/ui'

export const Exams = () => {
  const { exams } = useRouteLoaderData('exams') as {
    exams: Omit<Exam, 'rules'>[]
  }

  return (
    <div className="basis-3/4 space-y-4 px-0 py-4 sm:px-2">
      <Heading>Exam List</Heading>
      <ul className="space-y-2">
        {exams.map((exam) => (
          <li key={exam.id}>
            <Link
              to={`/exam/${exam.id}`}
              className="flex items-end justify-between rounded border border-gray-400 p-4 transition-colors hover:bg-gray-400"
            >
              <div className="space-y-2">
                <Heading size="h3">{exam.name}</Heading>
                <div className="flex items-center space-x-1">
                  <Timer />
                  <p>{exam.duration} mins</p>
                </div>
              </div>
              <p className="font-medium hover:underline">Click to start exam</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
