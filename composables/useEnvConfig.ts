export const useEnvConfig = () => {
  const config = useRuntimeConfig()

  const isProd = process.env.NODE_ENV === 'production'

  // ORIGINAL
  // const endpoint = isProd ? config.public.prodEndpoint : config.public.sandboxEndpoint
  // const publicKey = isProd ? config.public.prodPublicKey : config.public.sandboxPublicKey
  // const secretIntegrityKey = isProd ? config.prodSecretIntegrityKey : config.sandboxSecretIntegrityKey
  // const secretEventsKey = isProd ? config.prodSecretEventsKey : config.sandboxSecretEventsKey

  const endpoint = isProd ? config.public.sandboxEndpoint : config.public.prodEndpoint
  const publicKey = isProd ? config.public.sandboxPublicKey : config.public.prodPublicKey
  const secretIntegrityKey = isProd ? config.sandboxSecretIntegrityKey : config.prodSecretIntegrityKey
  const secretEventsKey = isProd ? config.sandboxSecretEventsKey : config.prodSecretEventsKey

  return {
    endpoint,
    publicKey,
    secretIntegrityKey,
    secretEventsKey
  }
}
