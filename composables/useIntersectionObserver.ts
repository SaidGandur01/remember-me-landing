export function useIntersectionObserver (callback: () => void) {
  const target = ref<HTMLElement | null>(null)

  let observer: IntersectionObserver | undefined

  const observe = () => {
    if (process.client) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              callback()
              observer?.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1
        }
      )

      if (target.value) {
        observer.observe(target.value)
      }
    }
  }

  onMounted(() => {
    observe()
  })

  onUnmounted(() => {
    if (target.value) {
      observer?.unobserve(target.value)
    }
    observer = undefined
  })

  return { target }
}
