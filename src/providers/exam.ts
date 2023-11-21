import { Exam, exams } from '@/_data/exams'
import { Question, questions } from '@/_data/questions'

import { shuffle } from '@/utils/array'

export interface ExamProvider {
  // Exam
  getExams(): Omit<Exam, 'rules'>[]
  getExamById(examId: number): Exam | undefined
  saveEndTimeExam(examId: number, duration: number): void
  getEndTimeExam(examId: number): string | undefined
  clearEndTimeExam: (examId: number) => void

  // Question
  getQuestions(): Question[]
  getQuestionById(
    questionId: number,
  ): Omit<Question, 'correctAnswer'> | undefined

  // Answer
  saveAnswer(examId: number, questionId: number, answerId: number): void
  getAnswer(examId: number, questionId: number): string | undefined
  clearAnswers: (examId: number) => void
}

export const examProvider: ExamProvider = {
  // Exam
  getExams: () => {
    return exams.map((exam) => ({
      id: exam.id,
      name: exam.name,
      duration: exam.duration,
    }))
  },
  getExamById: (examId: number) => {
    return exams.find((exam) => exam.id === examId)
  },
  saveEndTimeExam: (examId: number, duration: number) => {
    const endTime = new Date().getTime() + duration * 60 * 1000
    localStorage.setItem(`end-exam-${examId}`, endTime.toString())
  },
  getEndTimeExam: (examId: number) => {
    const endTime = localStorage.getItem(`end-exam-${examId}`)
    return endTime ?? undefined
  },
  clearEndTimeExam: (examId: number) => {
    localStorage.removeItem(`end-exam-${examId}`)
  },

  // Question
  getQuestions: () => questions,
  getQuestionById: (questionId: number) => {
    const question = questions.find(
      (question) => question.id === questionId,
    ) as unknown as Question
    if (!question) return undefined

    return {
      id: question?.id,
      answers: shuffle(question?.answers),
      content: question?.content,
      hasPrev: question?.id > 1,
      hasNext: question?.id < questions.length,
    }
  },

  // Answer
  saveAnswer: (examId: number, questionId: number, answerId: number) => {
    localStorage.setItem(`answer-${examId}-${questionId}`, answerId.toString())
  },
  getAnswer: (examId: number, questionId: number) => {
    const answer = localStorage.getItem(`answer-${examId}-${questionId}`)
    return answer ?? undefined
  },
  clearAnswers: (examId: number) => {
    questions.forEach((question) => {
      localStorage.removeItem(`answer-${examId}-${question.id}`)
    })
  },
}
