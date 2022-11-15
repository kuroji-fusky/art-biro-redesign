import { Analytics } from "@vercel/analytics/react"
import Layout from "../components/Base/Layout"
import "../styles/globals.scss"
import type { AppProps } from "next/app"

export default function ArtAndBiro({ Component, pageProps }: AppProps) {
  const disableOnDev = process.env.NODE_ENV !== "development"

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {disableOnDev && <Analytics />}
    </>
  )
}
