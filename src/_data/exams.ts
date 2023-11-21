export interface Exam {
  id: number
  name: string
  duration: number
  rules: string
}

const duration = 10

// Exam lists
export const exams: Exam[] = [
  {
    id: 1,
    name: 'Exam 1',
    duration: duration,
    rules:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam eum reprehenderit at earum impedit ullam culpa natus odio voluptas quaerat fuga velit hic repudiandae exercitationem porro sint, optio perferendis quasi!',
  },
  {
    id: 2,
    name: 'Exam 2',
    duration: duration,
    rules:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam eum reprehenderit at earum impedit ullam culpa natus odio voluptas quaerat fuga velit hic repudiandae exercitationem porro sint, optio perferendis quasi!',
  },
  {
    id: 3,
    name: 'Exam 3',
    duration: duration,
    rules:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam eum reprehenderit at earum impedit ullam culpa natus odio voluptas quaerat fuga velit hic repudiandae exercitationem porro sint, optio perferendis quasi!',
  },
  {
    id: 4,
    name: 'Exam 4',
    duration: duration,
    rules:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam eum reprehenderit at earum impedit ullam culpa natus odio voluptas quaerat fuga velit hic repudiandae exercitationem porro sint, optio perferendis quasi!',
  },
  {
    id: 5,
    name: 'Exam 5',
    duration: duration,
    rules:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam eum reprehenderit at earum impedit ullam culpa natus odio voluptas quaerat fuga velit hic repudiandae exercitationem porro sint, optio perferendis quasi!',
  },
]
