import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import styles from "./Navbar.module.scss"

export default function Navbar() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  // const [navHeight, setNavHeight] = useState<number>()

  // const detectHeightResponsive = () => {
  //   setNavHeight(containerRef.current?.scrollHeight ?? 1)
  // }

  // useEffect(() => {
  //   window.addEventListener("resize", detectHeightResponsive)
  //   return () => window.removeEventListener("resize", detectHeightResponsive)
  // }, [])

  // console.log(`${navHeight}px`)
  return (
    <header className={styles["fixed-nav"]}>
      <motion.div ref={containerRef} className={styles["container"]}>
        <Link href="/" className={styles["anb-logo"]}>
          <Image src="/images/logo.png" alt="Logo" fill />
        </Link>
        <nav className={styles["nav-list"]}>
          <button
            className="block text-2xl lg:hidden"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            X
          </button>
          <ul
            className="absolute flex flex-col items-end opacity-50 top-24 lg:top-0 right-10 lg:right-0 lg:relative gap-y-5 gap-x-12 lg:items-center lg:flex-row lg:opacity-100 font-mouse-memoirs"
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
      </motion.div>
    </header>
  )
}
