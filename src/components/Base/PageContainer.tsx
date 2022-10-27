import Head from "next/head"
import { useRouter } from "next/router"
import { LayoutProps } from "./Layout"

interface PageContainerProps extends LayoutProps {
	title: string
	description: string
	img?: string
}

export function PageContainer(props: PageContainerProps) {
	const router = useRouter()
	const currentPageRoute = `http://localhost:3000${router.asPath}`

	return (
		<>
			<Head>
				<title>{props.title}</title>
				<meta name="description" content={props.description} />
				<meta name="keywords" content="comic, furry, raccoon, fox, cartoon" />
				<meta property="og:title" content={props.title} />
				<meta property="og:description" content={props.description} />
				<meta property="og:url" content={currentPageRoute} />
				<meta property="og:image" content={props.img} />
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="630" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={props.title} />
				<meta name="twitter:description" content={props.description} />
				<meta name="twitter:image" content={props.img} />
				<meta name="twitter:url" content={currentPageRoute} />
				<link rel="canonical" href={currentPageRoute} />
				<link rel="manifest" href="manifest.webmanifiest" />
			</Head>
			<main>{props.children}</main>
		</>
	)
}
