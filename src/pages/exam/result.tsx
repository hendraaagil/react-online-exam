import { useRouteLoaderData } from 'react-router-dom'

import { Exam } from '@/_data/exams'
import { Question } from '@/_data/questions'
import { Container, Heading } from '@/components/ui'
import { Header, QuestionCard } from '@/components/exam'

export const Result = () => {
  const { exam, questions, score, maxScore } = useRouteLoaderData('result') as {
    exam: Exam
    questions: Question[]
    score: number
    maxScore: number
  }

  return (
    <Container>
      <Header title="Exam Result" />

      <main className="space-y-4 py-4">
        <div className="flex flex-col-reverse items-center justify-between sm:flex-row">
          <Heading size="h2" className="mt-2 sm:mt-0">
            {exam.name}
          </Heading>
          <div className="w-full rounded bg-gray-400 px-3 py-2 text-center sm:w-fit">
            <p className="text-sm">Score</p>
            <p className="text-lg font-bold">
              {score} / {maxScore}
            </p>
          </div>
        </div>
        <div className="space-y-4">
          {questions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
      </main>
    </Container>
  )
}
