import { Form, useRouteLoaderData } from 'react-router-dom'

import { Exam } from '@/_data/exams'
import { Button, Container } from '@/components/ui'
import { Header } from '@/components/exam'

export const ExamInstruction = () => {
  const { exam, endTime } = useRouteLoaderData('exam') as {
    exam: Exam
    endTime?: string
  }

  return (
    <Container>
      <Header title="Exam Instruction Page" />

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
          <input type="hidden" name="duration" value={exam.duration} />
          <input type="hidden" name="endTime" value={endTime} />
          <Button type="submit" color="green" className="w-full">
            {`${endTime ? 'Resume' : 'Start'} Exam`}
          </Button>
        </Form>
      </main>
    </Container>
  )
}
