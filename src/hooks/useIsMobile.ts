import { useState, useEffect, useCallback } from "react"

const MOBILE_SIZE = 768

export default function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = useCallback(() => {
    const windowWidth = window.innerWidth

    if (windowWidth > MOBILE_SIZE) {
      setIsMobile(false)
    } else if (windowWidth <= MOBILE_SIZE) {
      setIsMobile(true)
    }
  }, [setIsMobile])

  useEffect(() => {
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isMobile
}
