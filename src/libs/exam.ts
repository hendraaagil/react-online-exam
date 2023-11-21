import { LoaderFunctionArgs, redirect } from 'react-router-dom'
import { examProvider } from '@/providers/exam'

export const examsLoader = () => {
  return { exams: examProvider.getExams() }
}

export const examLoader = ({ params }: LoaderFunctionArgs) => {
  const exam = examProvider.getExamById(Number(params.examId as string))
  if (!exam) {
    return redirect('/dashboard')
  }

  const endTime = examProvider.getEndTimeExam(exam.id)
  return { exam, endTime }
}

export const examAction = async ({ request }: LoaderFunctionArgs) => {
  const formData = await request.formData()
  if (!formData.get('endTime')) {
    examProvider.saveEndTimeExam(
      Number(formData.get('examId')),
      Number(formData.get('duration')),
    )
  }

  return redirect('/exam/' + formData.get('examId') + '/question')
}

export const indexQuestionLoader = ({ request }: LoaderFunctionArgs) => {
  return redirect(request.url.replace('/question', '/question/1'))
}

export const questionLoader = ({ params }: LoaderFunctionArgs) => {
  const examId = Number(params.examId as string)
  const questionId = Number(params.questionId as string)

  const question = examProvider.getQuestionById(questionId)
  const endTime = examProvider.getEndTimeExam(examId)
  if (!question || !endTime) {
    return redirect('/dashboard')
  }

  const answer = examProvider.getAnswer(examId, questionId)
  return { question, answer, endTime }
}

export const questionAction = async ({ request }: LoaderFunctionArgs) => {
  return redirect(request.url.replace(/\/question\/.*/, '/result'))
}

export const resultLoader = ({ params }: LoaderFunctionArgs) => {
  const examId = Number(params.examId as string)
  const exam = examProvider.getExamById(examId)

  let questions = examProvider.getQuestions()
  questions = questions.map((question) => {
    const answer = examProvider.getAnswer(examId, question.id)
    return {
      ...question,
      selectedAnswer: answer ? Number(answer) : undefined,
    }
  })
  const score =
    questions.filter(
      (question) => question.correctAnswer === question.selectedAnswer,
    ).length * 10
  const maxScore = questions.length * 10

  const endTime = examProvider.getEndTimeExam(examId)
  if (!exam || !endTime) {
    return redirect('/dashboard')
  }

  examProvider.clearEndTimeExam(examId)
  examProvider.clearAnswers(examId)

  return { exam, questions, score, maxScore }
}
