import { Form, Link, useRouteLoaderData } from 'react-router-dom'

import { Exam } from '@/_data/exams'
import { Button, Container, Heading } from '@/components/ui'

export const ExamInstruction = () => {
  const { exam } = useRouteLoaderData('exam') as {
    exam: Exam
  }

  return (
    <Container>
      <header className="flex items-center justify-between border-b border-gray-700 py-4">
        <div className="flex items-center space-x-2">
          <Heading>Exam Instruction Page</Heading>
        </div>
        <Link to="/dashboard" className="font-medium hover:underline">
          Back to Dashboard
        </Link>
      </header>

      <main className="space-y-4 py-4">
        <div>
          <p className="font-bold">Exam Title</p>
          <p>{exam.name}</p>
        </div>
        <div>
          <p className="font-bold">Exam Duration</p>
          <p>{exam.duration} minutes</p>
        </div>
        <div>
          <p className="font-bold">Exam Rules</p>
          <p>{exam.rules}</p>
        </div>
        <Form method="post" replace>
          <input type="hidden" name="examId" value={exam.id} />
          <Button type="submit" color="green" className="w-full">
            Start Exam
          </Button>
        </Form>
      </main>
    </Container>
  )
}
