import Container from "@layout/Container";
import { Hero, ComicAbout, Book, AuthorAbout } from "@sections/index";

export default function Home() {
  return (
    <Container title="Home">
      <Hero />
      <ComicAbout />
      <Book />
      <AuthorAbout />
    </Container>
  );
}
