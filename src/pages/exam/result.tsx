import { Link, useRouteLoaderData } from 'react-router-dom'

import { Exam } from '@/_data/exams'
import { Question } from '@/_data/questions'
import { Container, Heading } from '@/components/ui'
import { QuestionCard } from '@/components/exam'

export const Result = () => {
  const { exam, questions, score, maxScore } = useRouteLoaderData('result') as {
    exam: Exam
    questions: Question[]
    score: number
    maxScore: number
  }

  return (
    <Container>
      <header className="flex items-center justify-between border-b border-gray-700 py-4">
        <div className="flex items-center space-x-2">
          <Heading>Exam Result</Heading>
        </div>
        <Link to="/dashboard" className="font-medium hover:underline">
          Back to Dashboard
        </Link>
      </header>

      <main className="space-y-4 py-4">
        <div className="flex items-center justify-between">
          <Heading size="h2">{exam.name}</Heading>
          <div className="rounded bg-gray-400 px-3 py-2 text-center">
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
