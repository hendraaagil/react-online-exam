import { describe, expect, it } from 'vitest'
import { formatDuration } from '../format'

describe('src/utils/format', () => {
  it('should formatted correctly', () => {
    const durationInSeconds = 600
    const result = formatDuration(durationInSeconds)
    const expectedResult = '00:10:00'

    expect(result).toBe(expectedResult)
  })
})
