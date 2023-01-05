import { useEffect, useState } from "react"

export default function useMediaReducedMotion() {
  const [isReduced, setIsReduced] = useState<boolean>()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches === true

      if (!mediaReduced) {
        console.log("[DEBUG] prefers-reduced-motion not set or disabled")
        setIsReduced(false)
      } else {
        console.log("[DEBUG] prefers-reduced-motion is reduced!")
        setIsReduced(true)
      }
    }
  }, [setIsReduced])

  return isReduced
}
