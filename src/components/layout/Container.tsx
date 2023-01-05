import Head from "next/head"

interface ContainerProps extends ChildrenNode {
  title: string
  description?: string
}

export default function Container({
  children,
  title,
  description,
}: ContainerProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main id="__content-mount">{children}</main>
    </>
  )
}
