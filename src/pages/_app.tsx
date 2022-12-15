import "../styles/globals.scss"
import type { AppProps } from "next/app"
import Layout from "../layout"

import { Analytics } from "@vercel/analytics/react"

import { MotionConfig } from "framer-motion"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

export default function ArtAndBiro({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics mode="auto" />
      <MotionConfig reducedMotion="user">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MotionConfig>
    </>
  )
}
