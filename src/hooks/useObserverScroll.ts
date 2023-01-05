import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface ObserverThreshold {
  top?: number
  bottom?: number
}

export default function useObserverScroll(props: ObserverThreshold) {
  const { top, bottom } = props
  const [position, setPosition] = useState(0)

  const { ref, inView } = useInView({
    rootMargin: `${top ?? 0}% 0% ${bottom ?? 0}% 0%`,
  })

  useEffect(() => {
    const scrollView = () => {
      if (!inView) {
        setPosition(0)
        return
      }

      return setPosition(window.scrollY)
    }

    window.addEventListener("scroll", scrollView)
    return () => window.removeEventListener("scroll", scrollView)
  }, [setPosition, inView])

  return { ref, position }
}
