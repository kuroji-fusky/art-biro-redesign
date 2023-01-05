import { CLIENT_ONLY } from "@constants/index"
import { useEffect } from "react"

interface AppendDocument {
  htmlClassName: string[]
  bodyClassName: string[]
}

export default function useAppendDocumentRoot({
  htmlClassName,
  bodyClassName,
}: AppendDocument): void {
  useEffect(() => {
    if (CLIENT_ONLY) {
      const htmlRoot = document.documentElement
      const bodyRoot = document.body

      htmlRoot.classList.add(...htmlClassName)
      bodyRoot.classList.add(...bodyClassName)
    }
  }, [])
}
