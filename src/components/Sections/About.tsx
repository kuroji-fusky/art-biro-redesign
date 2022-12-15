import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import useSectionTransition from "../../hooks/useSectionTransition"
import { aboutVariants } from "../../constants/ParallaxVariants"

export function About() {
  const { scrollY } = useScroll()
  const { ref, visible } = useSectionTransition("-40% 0px -55.5% 0px")

  const artTransform = useTransform(scrollY, [0, 1900], [0, -30])
  const cloudsTransform = useTransform(scrollY, [0, 1900], [0, -120])

  return (
    <section id="about" ref={ref} className="bg-blue-200 h-[90vh] w-full">
      <motion.div
        variants={aboutVariants.text}
        animate={visible ? "visible" : "hidden"}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full h-full font-mouse-memoirs px-8 flex items-center"
      >
        <article className="mx-auto max-w-screen-xl pt-20">
          <h2 className="text-[3rem]">About the comic</h2>
          <p className="text-[2rem]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga esse
            eum praesentium iste qui!
          </p>
        </article>
      </motion.div>
      <div
        id="image-wrapper"
        className="pointer-events-none select-none w-full overflow-x-hidden"
      >
        <motion.div
          id="art-and-paco"
          variants={aboutVariants.artAndPaco}
          animate={visible ? "visible" : "hidden"}
          className="w-full h-[30%] md:h-[40%] lg:h-[23rem] xl:h-[24.5rem] 2xl:h-[28rem] fixed left-0 right-0 z-[3] overflow-x-hidden"
          style={{ y: artTransform, willChange: "transform" }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/images/anb-paco-and-art_parallax.png"
            alt=""
            fill
            className="object-contain lg:object-cover"
          />
        </motion.div>
        <motion.div
          id="clouds"
          variants={aboutVariants.cloud}
          animate={visible ? "visible" : "hidden"}
          className="h-[32%] fixed left-0 right-0 overflow-x-hidden"
          transition={{ duration: 0.4 }}
          style={{
            y: cloudsTransform,
            willChange: "transform",
          }}
        >
          <Image
            src="/images/anb-clouds_parallax.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
