import { Exam, exams } from '@/_data/exams'
import { Question, questions } from '@/_data/questions'

import { shuffle } from '@/utils/array'

export interface ExamProvider {
  getExams(): Omit<Exam, 'rules'>[]
  getExamById(examId: number): Exam | undefined
  getQuestionById(questionId: number): Omit<Question, 'correctAnswer'>
}

export const examProvider: ExamProvider = {
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
}
