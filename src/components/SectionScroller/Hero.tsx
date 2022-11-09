import Image from "next/image"
import SectionScroller from "./SectionScroller"
import useMediaQuery from "hooks/useMediaQuery"
import { motion } from "framer-motion"

export function Hero() {
  const artLayout = useMediaQuery("(min-width: 1280px)")

  return (
    <SectionScroller name="hero" className="h-[125vh] bg-blue-100">
      <div className="absolute top-0 left-0 right-0 h-screen grid place-items-center">
        A Hero component
        <div className="relative z-20">TESTTS</div>
      </div>
      <motion.div className="fixed -bottom-[9rem] w-full flex flex-col justify-end h-[45%] z-30">
        <div id="art" className="relative h-full w-full">
          <Image
            src="/images/anb_hero-art-front.png"
            layout="fill"
            objectFit={artLayout ? "cover" : "contain"}
          />
        </div>
      </motion.div>
      <motion.div
        className="fixed w-full flex flex-col justify-end h-[70%]"
        style={{ bottom: artLayout ? "1rem" : "-6rem" }}
      >
        <div id="mountains" className="relative h-full w-full">
          <Image
            src="/images/anb_hero-sky-strip.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </motion.div>
    </SectionScroller>
  )
}
