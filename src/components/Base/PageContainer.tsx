import { LayoutProps } from "./Layout"

interface PageContainerProps extends LayoutProps {}

export function PageContainer(props: PageContainerProps) {
  return (
    <>
      <main>{props.children}</main>
    </>
  )
}
