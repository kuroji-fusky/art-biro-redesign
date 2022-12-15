import Footer from "../components/Base/Footer"
import Navbar from "../components/Base/Navbar"

export default function Layout({ children }: Children) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
