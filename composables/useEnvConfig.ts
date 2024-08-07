export const useEnvConfig = () => {
  const endpoint = process.env.NODE_ENV === 'production'
    ? process.env.PROD_ENDPOINT
    : process.env.SANDBOX_ENDPOINT

  const publicKey = process.env.NODE_ENV === 'production'
    ? process.env.PROD_PUBLIC_KEY
    : process.env.SANDBOX_PUBLIC_KEY

  const secretIntegrityKey = process.env.NODE_ENV === 'production'
    ? process.env.PROD_SECRET_INTEGRITY_KEY
    : process.env.SANDBOX_SECRET_INTEGRITY_KEY

  const secretEventsKey = process.env.NODE_ENV === 'production'
    ? process.env.PROD_SECRET_EVENTS_KEY
    : process.env.SANDBOX_SECRET_EVENTS_KEY

  return {
    endpoint,
    publicKey,
    secretIntegrityKey,
    secretEventsKey
  }
}
