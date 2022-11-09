import { PageContainer } from "@/components/Base"
import SectionScroller from "@/components/SectionScroller"
import { Hero } from "@/components/SectionScroller"

export default function Home() {
  return (
    <PageContainer title="Home" description="2">
      <Hero />
      <SectionScroller name="contents" className="h-[110vh]">
        About
      </SectionScroller>
      <SectionScroller name="character-art" className="h-[110vh]">
        Character 1
      </SectionScroller>
      <SectionScroller name="character-biro" className="h-[110vh]">
        Character 2
      </SectionScroller>
    </PageContainer>
  )
}
