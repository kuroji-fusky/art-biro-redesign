import { motion, Transition } from "framer-motion"
import Image from "next/image"
import useObserverScroll from "@hooks/useObserverScroll"
import styles from "./Hero.module.scss"

export function Hero() {
  const { ref, position } = useObserverScroll({
    top: 25,
  })

  return (
    <section ref={ref} className={styles["banner-strip"]}>
      <article className={styles["strip-wrapper"]}>
        <div className={styles["comic-summary"]}>
          logo
          <h3>A webcomic about friendship & brotherhood.</h3>
        </div>
        <ImageParallaxWrapper
          position={position}
          rate={2}
          image="anb_hero-sky-strip.png"
        />
        <ImageParallaxWrapper
          position={position}
          rate={3.85}
          image="anb_hero-art-front.png"
        />
      </article>
    </section>
  )
}

interface HeroParallaxProps {
  position: number
  rate: number
  image: string
}

function ImageParallaxWrapper({ position, rate, image }: HeroParallaxProps) {
  const bezier: Transition = { duration: 0.5, ease: "circOut" }

  return (
    <motion.div
      animate={{ y: position / rate }}
      transition={bezier}
      className={styles["parallax-strip"]}
    >
      <Image src={`/images/${image}`} alt="" fill priority />
    </motion.div>
  )
}
