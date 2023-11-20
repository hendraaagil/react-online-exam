import { useLocation, useNavigate, useRouteLoaderData } from 'react-router-dom'

import { Question as IQuestion } from '@/_data/questions'
import { Button, Container, Heading, Input } from '@/components/ui'
import { useRef } from 'react'

export const Question = () => {
  const { question } = useRouteLoaderData('question') as {
    question: Omit<IQuestion, 'correctAnswer'>
  }
  const formRef = useRef<HTMLFormElement>(null)
  const location = useLocation()
  const navigate = useNavigate()

  const handlePrev = () => {
    navigate(`../${question.id - 1}`)
  }

  const handleNext = () => {
    const formData = new FormData(formRef.current!)
    console.log(formData.get('answer'))

    navigate(
      question.hasNext
        ? `../${question.id + 1}`
        : location.pathname.replace(/\/question\/.*/, '/result'),
    )
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
        <form ref={formRef} className="space-y-1">
          {question.answers.map((answer) => (
            <Input
              key={answer.id}
              id={`answer-${answer.id}`}
              value={answer.id}
              label={answer.text}
              name="answer"
              type="radio"
            />
          ))}
        </form>
      </main>
    </Container>
  )
}
