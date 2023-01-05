import { motion } from "framer-motion"
import Image from "next/image"
import useObserverScroll from "@hooks/useObserverScroll"

export function Hero() {
  const { ref, position } = useObserverScroll()

  return (
    <section
      ref={ref}
      className="h-[90vh] p-6 !pb-0 md:p-12"
      style={{
        paddingTop: "max(1.65rem, calc(7.25rem + 1.65vw))",
      }}
    >
      <article className="relative h-full py-3 overflow-hidden border-4 border-black bg-sky-100 px-7">
        <div className="relative z-10 grid h-full text-center place-items-center">
          <div>
            logo
            <h3>A webcomic about friendship & brotherhood.</h3>
          </div>
        </div>
        <motion.div
          animate={{ y: position / 2 }}
          className="absolute inset-0 pointer-events-none select-none"
          transition={{ duration: 0.5, ease: "circOut" }}
        >
          <Image
            src="/images/anb_hero-sky-strip.png"
            alt=""
            fill
            style={{ objectFit: "contain", objectPosition: "50% 100%" }}
          />
        </motion.div>

        <motion.div
          animate={{ y: position / 3.85 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="absolute inset-0 pointer-events-none select-none"
        >
          <Image
            src="/images/anb_hero-art-front.png"
            alt=""
            fill
            style={{ objectFit: "contain", objectPosition: "50% 100%" }}
          />
        </motion.div>
      </article>
    </section>
  )
}
