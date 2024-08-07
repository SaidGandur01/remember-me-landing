export async function generateHash (
  reference: string,
  amount: number,
  currency: string,
  expirationTime: string = ''
) {
  const response = await fetch('/api/generateHash', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      reference,
      amount,
      currency,
      expirationTime
    })
  })

  if (!response.ok) {
    throw new Error('Failed to generate hash')
  }

  const { hash } = await response.json()
  return hash
}
