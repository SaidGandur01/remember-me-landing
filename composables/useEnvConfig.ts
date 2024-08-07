export const useEnvConfig = () => {
  const config = useRuntimeConfig()

  const isProd = process.env.NODE_ENV === 'production'

  const endpoint = isProd ? config.public.prodEndpoint : config.public.sandboxEndpoint
  const publicKey = isProd ? config.public.prodPublicKey : config.public.sandboxPublicKey
  const secretIntegrityKey = isProd ? config.prodSecretIntegrityKey : config.sandboxSecretIntegrityKey
  const secretEventsKey = isProd ? config.prodSecretEventsKey : config.sandboxSecretEventsKey

  return {
    endpoint,
    publicKey,
    secretIntegrityKey,
    secretEventsKey
  }
}
