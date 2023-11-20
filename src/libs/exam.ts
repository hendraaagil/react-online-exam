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

  return { exam: exam }
}

export const examAction = async ({ request }: LoaderFunctionArgs) => {
  const formData = await request.formData()
  return redirect('/exam/' + formData.get('examId') + '/question')
}

export const indexQuestionLoader = ({ request }: LoaderFunctionArgs) => {
  return redirect(request.url.replace('/question', '/question/1'))
}

export const questionLoader = ({ params }: LoaderFunctionArgs) => {
  const examId = Number(params.examId as string)
  const questionId = Number(params.questionId as string)
  const question = examProvider.getQuestionById(questionId)
  const answer = examProvider.getAnswer(examId, questionId)

  return { question, answer }
}
