import { useState, useEffect } from "react"

export default function useScreenScroll(scrollY?: number, scrollTo?: number) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= scrollY! ?? 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [setScrolled])

  useEffect(() => {
    window.scrollTo({
      top: scrollTo ?? 0,
    })
  }, [])

  return scrolled
}
