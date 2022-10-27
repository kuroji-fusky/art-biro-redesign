import { Layout } from "@/components/Base"
import "@/styles/globals.scss"
import type { AppProps } from "next/app"

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
