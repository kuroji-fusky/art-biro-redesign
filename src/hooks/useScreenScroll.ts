import { useState, useEffect } from "react"

export default function useScreenScroll(offset: number) {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > offset ? setScroll(true) : setScroll(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [offset])

  return scroll
}
