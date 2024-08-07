export const useEnvConfig = () => {
  const config = useRuntimeConfig()

  const isProd = config.public.nodeEnv === 'production'
  console.log({ isProd })
  let endpoint
  let publicKey
  let secretIntegrityKey
  let secretEventsKey

  if (isProd) {
    endpoint = config.public.prodEndpoint
    publicKey = config.public.prodPublicKey
    secretIntegrityKey = config.prodSecretIntegrityKey
    secretEventsKey = config.prodSecretEventsKey
  } else {
    endpoint = config.public.sandboxEndpoint
    publicKey = config.public.sandboxPublicKey
    secretIntegrityKey = config.sandboxSecretIntegrityKey
    secretEventsKey = config.sandboxSecretEventsKey
  }
  // ORIGINAL
  // const endpoint = isProd ? config.public.prodEndpoint : config.public.sandboxEndpoint
  // const publicKey = isProd ? config.public.prodPublicKey : config.public.sandboxPublicKey
  // const secretIntegrityKey = isProd ? config.prodSecretIntegrityKey : config.sandboxSecretIntegrityKey
  // const secretEventsKey = isProd ? config.prodSecretEventsKey : config.sandboxSecretEventsKey

  return {
    endpoint,
    publicKey,
    secretIntegrityKey,
    secretEventsKey
  }
}
