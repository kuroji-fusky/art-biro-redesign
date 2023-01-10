import { CLIENT_ONLY } from "@constants/index"
import { useEffect, useLayoutEffect } from "react"

const useIsomorphicLayoutEffect = CLIENT_ONLY ? useLayoutEffect : useEffect

export default useIsomorphicLayoutEffect
