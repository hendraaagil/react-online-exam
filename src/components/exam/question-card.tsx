import clsx from 'clsx'
import { Question } from '@/_data/questions'

export const QuestionCard = ({ question }: { question: Question }) => {
  const isCorrect = question.correctAnswer === question.selectedAnswer
  const selectedAnswer = question.answers.find(
    (answer) => answer.id === question.selectedAnswer,
  )

  return (
    <div
      key={question.id}
      className="space-y-2 border-t border-t-gray-700 pt-2"
    >
      <p className="font-medium">
        <strong>{question.id}.</strong> {question.content}
      </p>
      <ul className="space-y-1">
        {question.answers.map((answer) => (
          <li
            key={answer.id}
            className={clsx(
              'rounded bg-gray-400 bg-opacity-50 px-3 py-2',
              {
                'bg-red-400':
                  answer.id === question.selectedAnswer && !isCorrect,
              },
              {
                'bg-green-400': answer.id === question.correctAnswer,
              },
            )}
          >
            {answer.text}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <p>
          Your Answer: <strong>{selectedAnswer?.text || '-'}</strong>
        </p>
        <p className="text-sm font-bold">{isCorrect ? '10' : '0'} / 10</p>
      </div>
    </div>
  )
}
