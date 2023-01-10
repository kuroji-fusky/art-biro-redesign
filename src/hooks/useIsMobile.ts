import { useState, useEffect, useCallback } from "react"

export default function useIsMobile(size?: number): boolean {
	const MOBILE_SIZE = size ?? 768

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
