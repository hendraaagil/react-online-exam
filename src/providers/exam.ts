import { Exam, exams } from '@/_data/exams'
import { Question, questions } from '@/_data/questions'

import { shuffle } from '@/utils/array'

export interface ExamProvider {
  // Exam
  getExams(): Omit<Exam, 'rules'>[]
  getExamById(examId: number): Exam | undefined

  // Question
  getQuestionById(questionId: number): Omit<Question, 'correctAnswer'>

  // Answer
  saveAnswer(examId: number, questionId: number, answerId: number): void
  getAnswer(examId: number, questionId: number): string | undefined
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

  // Question
  getQuestionById: (questionId: number) => {
    const { id, answers, content } = questions.find(
      (question) => question.id === questionId,
    ) as unknown as Question

    return {
      id,
      answers: shuffle(answers),
      content,
      hasPrev: id > 1,
      hasNext: id < questions.length,
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
}
