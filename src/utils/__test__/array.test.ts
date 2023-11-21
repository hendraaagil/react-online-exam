import { describe, expect, it } from 'vitest'
import { shuffle } from '../array'

describe('src/utils/array', () => {
  it('should return same size of array', () => {
    const numbers = [1, 2, 3, 4, 5, 6]
    const result = shuffle(numbers)

    expect(result.length).toBe(numbers.length)
  })
})
