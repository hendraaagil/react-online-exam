export const formatDuration = (durationInSeconds: number) => {
  const hours = Math.floor(durationInSeconds / 3600)
  durationInSeconds %= 3600
  const minutes = Math.floor(durationInSeconds / 60)
  const seconds = durationInSeconds % 60

  // Return format: 00:00:00
  return (
    String(hours).padStart(2, '0') +
    ':' +
    String(minutes).padStart(2, '0') +
    ':' +
    String(seconds).padStart(2, '0')
  )
}
