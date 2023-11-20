import { useEffect, useState } from 'react'
import {
  useLocation,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from 'react-router-dom'

import { Question as IQuestion } from '@/_data/questions'
import { Button, Container, Heading, Input } from '@/components/ui'
import { examProvider } from '@/providers/exam'

export const Question = () => {
  const { question, answer } = useRouteLoaderData('question') as {
    question: Omit<IQuestion, 'correctAnswer'>
    answer?: string
  }

  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>(
    answer,
  )
  const params = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  // Get manually on mount, because useRouteLoaderData doesn't triggered on mount
  useEffect(() => {
    setSelectedAnswer(
      examProvider.getAnswer(Number(params.examId), question.id),
    )
  }, [params.examId, question.id])

  const saveAnswer = () => {
    // TODO: Handle no answer selected
    if (!selectedAnswer) {
      return
    }

    examProvider.saveAnswer(
      Number(params.examId),
      question.id,
      Number(selectedAnswer),
    )
  }

  const handlePrev = () => {
    saveAnswer()
    navigate(`../${question.id - 1}`)
  }

  const handleNext = () => {
    saveAnswer()
    setSelectedAnswer(undefined)
    navigate(
      question.hasNext
        ? `../${question.id + 1}`
        : location.pathname.replace(/\/question\/.*/, '/result'),
    )
  }

  const handleChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value)
  }

  return (
    <Container>
      <header className="grid grid-cols-3 border-b border-gray-700 py-4">
        {question.hasPrev ? (
          <Button color="red" className="place-self-start" onClick={handlePrev}>
            Previous
          </Button>
        ) : (
          <div />
        )}
        <Heading className="place-self-center">Question {question.id}</Heading>
        <Button color="green" className="place-self-end" onClick={handleNext}>
          {question.hasNext ? 'Next' : 'Finish'}
        </Button>
      </header>

      <main className="space-y-2 py-4">
        <p className="font-medium">{question.content}</p>
        <div className="space-y-1">
          {question.answers.map((answer) => (
            <Input
              key={answer.id}
              id={`answer-${answer.id}`}
              value={answer.id}
              label={answer.text}
              name="answer"
              type="radio"
              onChange={handleChangeAnswer}
              checked={selectedAnswer === answer.id.toString()}
            />
          ))}
        </div>
      </main>
    </Container>
  )
}
