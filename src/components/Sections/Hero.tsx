import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import useSectionTransition from "../../hooks/useSectionTransition"

export function Hero() {
  const { ref, visible } = useSectionTransition("-45% 0px 0px 0px")

  const { scrollY } = useScroll()

  const logoTransform = useTransform(scrollY, [0, 1200], [0, 1900])
  const artTransform = useTransform(scrollY, [0, 1500], [0, 100])
  const mountainTransform = useTransform(scrollY, [0, 1500], [0, 320])

  const variants = {
    visible: { opacity: 1, pointerEvent: "auto" },
    hidden: { opacity: 0, pointerEvent: "none" },
  }

  return (
    <section ref={ref} className="bg-blue-100 h-[120vh] w-full">
      <div className="fixed right-10 bottom-10 z-[10] px-7 py-4 rounded-md bg-white">
        Demo built with Next.js + Tailwind CSS + Framer Motion + Three.js
      </div>
      <motion.div
        id="hero-wrapper"
        className={`grid place-items-center h-full ${
          visible ? "pointer-events-auto" : "pointer-events-none"
        }`}
        variants={variants}
        animate={visible ? "visible" : "hidden"}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <motion.article
          id="comic-info-container"
          className="flex flex-col items-center md:gap-6 lg:gap-8 relative z-[2] top-[2.5rem] xl:top-[3.5rem]"
          style={{ y: logoTransform, willChange: "transform" }}
        >
          <div
            id="branding-wrapper"
            className="relative select-none
							2xl:h-[18rem] 2xl:w-[25rem]
							xl:h-[14.75rem] xl:w-[20rem]
							lg:h-[14rem] lg:w-[19.5rem]
							md:h-[10rem] md:w-[14rem]
							h-[8rem] w-[12rem]
					"
          >
            <Link href="/#about">
              <motion.div
                id="branding"
                whileHover={{ scale: 1.125 }}
                whileTap={{ scale: 1.005 }}
                className="absolute grid place-items-center w-full h-full"
              >
                <Image src="/images/logo.png" alt="Branding" fill priority />
              </motion.div>
            </Link>
          </div>
          <p className="text-[1.75rem] lg:text-[2.5rem] font-mouse-memoirs">
            A webcomic about friendship &amp; brotherhood.
          </p>
        </motion.article>
        <div
          id="image-wrapper"
          className="pointer-events-none select-none w-full overflow-x-hidden"
        >
          <motion.div
            id="art"
            className="w-full h-[30%] md:h-[40%] lg:h-[23rem] xl:h-[24.5rem] 2xl:h-[28rem] fixed -bottom-[6rem] left-0 right-0 z-[3] overflow-x-hidden"
            style={{ y: artTransform, willChange: "transform" }}
          >
            <Image
              src="/images/anb_hero-art-front.png"
              alt=""
              fill
              className="object-contain lg:object-cover"
            />
          </motion.div>
          <motion.div
            id="mountains"
            className="h-[60%] fixed bottom-[4rem] left-0 right-0 overflow-x-hidden"
            style={{
              y: mountainTransform,
              willChange: "transform",
            }}
          >
            <Image
              src="/images/anb_hero-sky-strip.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
