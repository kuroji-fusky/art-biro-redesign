import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import styles from "./Navbar.module.scss"
import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect"
import { CLIENT_ONLY } from "@constants/index"

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [scrollHeight, setScrollHeight] = useState(0)
  const navRef = useRef<HTMLDivElement>(null)

  const dynamicScroll = navRef.current?.clientHeight

  const handleNavScroll = () => {
    if (CLIENT_ONLY) {
      setScrollHeight(dynamicScroll ?? 105)
    }
  }

  useEffect(() => {
    handleNavScroll()

    window.addEventListener("resize", handleNavScroll)
    return () => window.removeEventListener("resize", handleNavScroll)
  }, [])

  return (
    <header className={styles["fixed-nav"]}>
      <motion.div animate={{ height: !isNavbarOpen ? scrollHeight : "100vh" }}>
        <div ref={navRef} className={styles["nav-wrapper"]}>
          <Link href="/" className={styles["anb-logo"]}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              aria-label="Art and Biro Logo"
              fill
            />
          </Link>
          <nav className={styles["nav-list"]}>
            <button
              className="block text-2xl md:hidden"
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            >
              X
            </button>
            <ul
              className="absolute flex flex-col items-end opacity-50 top-24 md:top-0 right-10 md:right-0 md:relative gap-y-5 gap-x-12 md:items-center md:flex-row md:opacity-100 font-mouse-memoirs"
              aria-hidden="false"
            >
              <li>
                <Link href="/comics">Comics</Link>
              </li>
              <li>
                <Link href="/fanart">Fanart</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <button className={styles["kofi-button"]}>
                  Available at Ko-Fi
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </motion.div>
    </header>
  )
}
