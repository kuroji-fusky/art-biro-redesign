import dynamic from "next/dynamic"
import Container from "../components/Base/Container"
import { Hero, About } from "../components/Sections"

const Fanart = dynamic(() =>
  import("../components/Sections/Fanart").then((s) => s.Fanart)
)

export default function Home() {
  return (
    <Container title="Home">
      <Hero />
      <About />
      <Fanart />
    </Container>
  )
}
