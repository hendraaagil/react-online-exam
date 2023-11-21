import { describe, expect, it } from 'vitest'
import { examProvider } from '../exam'

describe('src/providers/exam', () => {
  it('should list of exams with correct property', () => {
    const exams = examProvider.getExams()

    expect(exams).toBeInstanceOf(Array)
    expect(exams[0]).toHaveProperty('id')
    expect(exams[0]).toHaveProperty('name')
    expect(exams[0]).toHaveProperty('duration')
  })

  it('should return undefined exam if does not exist', () => {
    const examId = 123
    const exam = examProvider.getExamById(examId)

    expect(exam).toBe(undefined)
  })

  it('should return exam object with correct property', () => {
    const examId = 1
    const exam = examProvider.getExamById(examId)

    expect(exam).toHaveProperty('id', examId)
    expect(exam).toHaveProperty('name')
    expect(exam).toHaveProperty('duration')
    expect(exam).toHaveProperty('rules')
  })

  it('should save end time exam', () => {
    const examId = 1
    const duration = 10
    examProvider.saveEndTimeExam(examId, duration)

    const endTime = examProvider.getEndTimeExam(examId)
    expect(endTime).not.toBe(undefined)
  })

  it('should return undefined exam if does not exist', () => {
    const examId = 123
    const endTime = examProvider.getEndTimeExam(examId)

    expect(endTime).toBe(undefined)
  })

  it('should clear end time exam', () => {
    const examId = 1
    examProvider.clearEndTimeExam(examId)

    const endTime = examProvider.getEndTimeExam(examId)
    expect(endTime).toBe(undefined)
  })

  it('should list of questions with correct property', () => {
    const questions = examProvider.getQuestions()

    expect(questions).toBeInstanceOf(Array)
    expect(questions[0]).toHaveProperty('id')
    expect(questions[0]).toHaveProperty('content')
    expect(questions[0]).toHaveProperty('correctAnswer')
    expect(questions[0]).toHaveProperty('answers')
  })

  it('should return undefined question if does not exist', () => {
    const questionId = 123
    const question = examProvider.getQuestionById(questionId)

    expect(question).toBe(undefined)
  })

  it('should return question object with correct property', () => {
    const questionId = 1
    const question = examProvider.getQuestionById(questionId)

    expect(question).toHaveProperty('id', questionId)
    expect(question).toHaveProperty('content')
    expect(question).toHaveProperty('answers')
    expect(question).toHaveProperty('hasPrev')
    expect(question).toHaveProperty('hasNext')
  })

  it('should save answer', () => {
    const examId = 1
    const questionId = 1
    const answerId = 1
    examProvider.saveAnswer(examId, questionId, answerId)

    const answer = examProvider.getAnswer(examId, questionId)
    expect(answer).not.toBe(undefined)
  })

  it('should return undefined answer if does not exist', () => {
    const examId = 1
    const questionId = 123
    const answer = examProvider.getAnswer(examId, questionId)

    expect(answer).toBe(undefined)
  })

  it('should clear answers', () => {
    const examId = 1
    examProvider.clearAnswers(examId)

    const answer = examProvider.getAnswer(examId, 1)
    expect(answer).toBe(undefined)
  })
})
