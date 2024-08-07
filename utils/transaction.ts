const generateSegment = (length: number): string => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyz'
  let segment = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    segment += chars[randomIndex]
  }
  return segment
}

export const generateTransactionId = (): string => {
  const segments = [
    generateSegment(6),
    generateSegment(12),
    generateSegment(6)
  ]
  return segments.join('-')
}
