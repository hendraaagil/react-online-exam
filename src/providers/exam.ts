import { Exam, exams } from '@/_data/exams'

export interface ExamProvider {
  getExams(): Omit<Exam, 'rules'>[]
  getExamById(id: number): Exam | undefined
}

export const examProvider: ExamProvider = {
  getExams: () => {
    return exams.map((exam) => ({
      id: exam.id,
      name: exam.name,
      duration: exam.duration,
    }))
  },
  getExamById: (id: number) => {
    return exams.find((exam) => exam.id === id)
  },
}
