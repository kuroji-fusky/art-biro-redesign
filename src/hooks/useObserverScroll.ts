import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

export default function useObserverScroll() {
  const [position, setPosition] = useState(0)

  const { ref, inView } = useInView()

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
