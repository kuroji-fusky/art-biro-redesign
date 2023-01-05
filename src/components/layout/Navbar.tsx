import Image from "next/image"
import Link from "next/link"
import styles from "./Navbar.module.scss"

export default function Navbar() {
  return (
    <header className={styles["fixed-nav"]}>
      <div className={styles["container"]}>
        <Link href="/" className={styles["anb-logo"]}>
          <Image src="/images/logo.png" alt="Logo" fill />
        </Link>
        <nav className={styles["nav-list"]}>
          <ul className="flex items-center gap-12 font-mouse-memoirs">
            <li>Comics</li>
            <li>Fanart</li>
            <li>Contact</li>
            <li>
              <button className={styles["kofi-button"]}>
                Available at Ko-Fi
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
