import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

export default function useSectionTransition(threshold: string) {
  const [visible, setVisible] = useState(false)

  const { ref, inView } = useInView({
    rootMargin: threshold,
  })

  useEffect(() => {
    if (inView) {
      setTimeout(() => setVisible(true), 200)
    } else {
      setVisible(false)
    }
  }, [visible, inView])

  return { ref, visible }
}
