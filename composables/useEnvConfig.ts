export const useEnvConfig = () => {
  const config = useRuntimeConfig()

  const isProd = config.public.nodeEnv === 'production'

  let endpoint, publicKey, secretIntegrityKey, secretEventsKey, publicTransactionEndpoint

  if (isProd) {
    endpoint = config.public.prodEndpoint
    publicKey = config.public.prodPublicKey
    secretIntegrityKey = config.prodSecretIntegrityKey
    secretEventsKey = config.prodSecretEventsKey
    publicTransactionEndpoint = config.public.prodPublicTransactionEndpoint
  } else {
    endpoint = config.public.sandboxEndpoint
    publicKey = config.public.sandboxPublicKey
    secretIntegrityKey = config.sandboxSecretIntegrityKey
    secretEventsKey = config.sandboxSecretEventsKey
    publicTransactionEndpoint = config.public.sandboxPublicTransactionEndpoint
  }

  return {
    endpoint,
    publicKey,
    secretIntegrityKey,
    secretEventsKey,
    publicTransactionEndpoint
  }
}
