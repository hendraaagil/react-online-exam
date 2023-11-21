export interface Question {
  id: number
  content: string
  answers: { id: number; text: string }[]
  correctAnswer: number
  selectedAnswer?: number
  hasPrev?: boolean
  hasNext?: boolean
}

// Question lists
export const questions: Question[] = [
  {
    id: 1,
    content: 'What is the capital of France?',
    answers: [
      { id: 1, text: 'Paris' },
      { id: 2, text: 'Marseille' },
      { id: 3, text: 'Lyon' },
      { id: 4, text: 'Toulouse' },
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    content: 'What is the capital of Germany?',
    answers: [
      { id: 1, text: 'Berlin' },
      { id: 2, text: 'Hamburg' },
      { id: 3, text: 'Munich' },
      { id: 4, text: 'Cologne' },
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    content: 'What is the capital of Italy?',
    answers: [
      { id: 1, text: 'Rome' },
      { id: 2, text: 'Milan' },
      { id: 3, text: 'Naples' },
      { id: 4, text: 'Turin' },
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    content: 'What is the capital of Spain?',
    answers: [
      { id: 1, text: 'Madrid' },
      { id: 2, text: 'Barcelona' },
      { id: 3, text: 'Valencia' },
      { id: 4, text: 'Seville' },
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    content: 'What is the capital of Portugal?',
    answers: [
      { id: 1, text: 'Lisbon' },
      { id: 2, text: 'Porto' },
      { id: 3, text: 'Vila Nova de Gaia' },
      { id: 4, text: 'Amadora' },
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    content: 'What is the capital of Greece?',
    answers: [
      { id: 1, text: 'Athens' },
      { id: 2, text: 'Thessaloniki' },
      { id: 3, text: 'Patras' },
      { id: 4, text: 'Heraklion' },
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    content: 'What is the capital of Belgium?',
    answers: [
      { id: 1, text: 'Brussels' },
      { id: 2, text: 'Antwerp' },
      { id: 3, text: 'Ghent' },
      { id: 4, text: 'Charleroi' },
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    content: 'What is the capital of Netherlands?',
    answers: [
      { id: 1, text: 'Amsterdam' },
      { id: 2, text: 'Rotterdam' },
      { id: 3, text: 'The Hague' },
      { id: 4, text: 'Utrecht' },
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    content: 'What is the capital of Denmark?',
    answers: [
      { id: 1, text: 'Copenhagen' },
      { id: 2, text: 'Aarhus' },
      { id: 3, text: 'Odense' },
      { id: 4, text: 'Aalborg' },
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    content: 'What is the capital of Sweden?',
    answers: [
      { id: 1, text: 'Stockholm' },
      { id: 2, text: 'Gothenburg' },
      { id: 3, text: 'Malmö' },
      { id: 4, text: 'Uppsala' },
    ],
    correctAnswer: 1,
  },
]
