import SectionScroller from "./SectionScroller"
import Image from "next/image"

export function Hero() {
  return (
    <SectionScroller name="hero" className="h-[125vh]">
      <div className="absolute top-0 left-0 right-0  h-screen">
        A Hero component
      </div>
      <div
        id="backdrop-responsive"
        className="fixed bottom-0 w-full flex flex-col items-end h-[50%]"
      >
        <div
          id="backdrop-art"
          className="relative h-full w-full"
          style={
            {
              "--img": "url(/images/anb_hero-art-front.png)",
            } as any
          }
        ></div>

        {/* <div id="mountains" className="relative h-[15rem] w-full">
          <Image
            src="/images/anb_hero-sky-strip.png"
            layout="fill"
            objectFit="cover"
          />
        </div> */}
      </div>
    </SectionScroller>
  )
}
