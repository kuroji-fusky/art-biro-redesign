import { useRouter } from "next/router"
import Footer from "./Footer"
import Navbar from "./Navbar"

export function Layout({ children }: ChildrenNode) {
  const router = useRouter()
  const isComicPath = router.pathname !== "/comic"

  return isComicPath ? (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  ) : (
    <>
      <header>Nav comic custom</header>
      {children}
    </>
  )
}
