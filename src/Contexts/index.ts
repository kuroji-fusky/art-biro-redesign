import { createContext } from "react"

type BgContextType = {
  color: string
  setColor: (color: string) => void
}

export const BgContext = createContext<BgContextType>({
  color: "#fff",
  setColor: () => {},
})
