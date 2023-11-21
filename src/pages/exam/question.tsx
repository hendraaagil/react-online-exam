import { useEffect, useState } from 'react'
import {
  useFetcher,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from 'react-router-dom'

import { Question as IQuestion } from '@/_data/questions'
import { Button, Container, Heading, Input } from '@/components/ui'
import { examProvider } from '@/providers/exam'
import { formatDuration } from '@/utils/format'

export const Question = () => {
  const { question, answer, endTime } = useRouteLoaderData('question') as {
    question: Omit<IQuestion, 'correctAnswer'>
    answer?: string
    endTime: string
  }
  const remainingTime = Number(endTime) - new Date().getTime()

  const [timer, setTimer] = useState(Math.floor(remainingTime / 1000))
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>(
    answer,
  )
  const params = useParams()
  const fetcher = useFetcher()
  const navigate = useNavigate()

  // Get manually on mount, because useRouteLoaderData doesn't triggered on mount
  useEffect(() => {
    setSelectedAnswer(
      examProvider.getAnswer(Number(params.examId), question.id),
    )
  }, [params.examId, question.id])

  // Update timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : prev))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const saveAnswer = () => {
    // If no answer selected, don't save
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
    navigate(`../${question.id + 1}`)
  }

  const handleChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value)
  }

  const handleFinish = () => {
    saveAnswer()
    fetcher.submit(null, { method: 'post' })
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
        <Button
          color="green"
          className="place-self-end"
          onClick={question.hasNext ? handleNext : handleFinish}
        >
          {question.hasNext ? 'Next' : 'Finish'}
        </Button>
      </header>

      <main className="space-y-2 py-4">
        <div className="mx-auto flex max-w-fit flex-col items-center space-y-1 rounded bg-gray-400 px-4 py-2">
          <p className="text-sm">Remaining Time</p>
          <time className="font-bold">{formatDuration(timer)}</time>
        </div>
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
