import { H3Event, sendError, createError, readBody } from 'h3'
import { useEnvConfig } from '~/composables/useEnvConfig'

export default async function handler (event: H3Event) {
  if (event.req.method !== 'POST') {
    return sendError(event, createError({ statusCode: 405, statusMessage: 'Method not allowed' }))
  }

  const body = await readBody(event)
  const { reference, amount, currency, expirationTime } = body
  const { secretEventsKey: SECRET } = useEnvConfig()

  if (!reference || !amount || !currency || !SECRET) {
    return sendError(event, createError({ statusCode: 400, statusMessage: 'Missing required fields' }))
  }

  const cadenaConcatenada = `${reference}${amount}${currency}${expirationTime || ''}${SECRET}`

  try {
    const encodedText = new TextEncoder().encode(cadenaConcatenada)
    const hashBuffer = await crypto.subtle.digest('SHA-256', encodedText)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')

    return { hash: hashHex }
  } catch (error) {
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Error generating hash' }))
  }
}
