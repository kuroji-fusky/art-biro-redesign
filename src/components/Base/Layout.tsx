import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export interface LayoutProps {
  children?: React.ReactElement
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}
