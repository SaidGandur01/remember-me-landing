import crypto from 'crypto'
import { H3Event, sendError, createError, readBody } from 'h3'
import { useEnvConfig } from '~/composables/useEnvConfig'

export default async (event: H3Event) => {
  if (event.req.method !== 'POST') {
    return sendError(
      event,
      createError({ statusCode: 405, statusMessage: 'Method Not Allowed' })
    )
  }

  try {
    const body = await readBody(event)
    const { secretEventsKey: SECRET } = useEnvConfig()
    if (
      !body ||
      !body.data ||
      !body.data.transaction ||
      !body.signature ||
      !body.timestamp
    ) {
      throw new Error('Datos de transacción inválidos')
    }

    const { transaction } = body.data
    const { checksum } = body.signature
    const { timestamp } = body
    const concatenatedValues = `${transaction.id}${transaction.status}${transaction.amount_in_cents}`
    const concatenatedString = `${concatenatedValues}${timestamp}${SECRET}`

    // Generar el checksum usando SHA256
    const hash = crypto
      .createHash('sha256')
      .update(concatenatedString)
      .digest('hex')
      .toLowerCase()

    // Verificar el checksum
    if (hash !== checksum) {
      console.error('Checksum no válido')
      return sendError(
        event,
        createError({ statusCode: 400, statusMessage: 'Invalid checksum' })
      )
    }

    // Procesar la transacción
    console.log('Transacción recibida y verificada:', transaction)

    // Responder con un status 200 para indicar que la solicitud fue exitosa
    return { success: true }
  } catch (error) {
    console.error('Error procesando la transacción:', error)
    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: 'Error processing transaction'
      })
    )
  }
}
