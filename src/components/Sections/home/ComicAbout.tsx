export function ComicAbout() {
  return (
    <section className="flex flex-col h-screen p-6 !pt-5 md:!pt-12 gap-x-10 gap-y-5 xl:flex-row md:p-12">
      <article className="relative h-full py-3 border-4 border-black px-7">
        <h2>About</h2>
        <p>
          <strong>Art & Biro</strong> is a project born of the need to share a
          positive message about friendship. Despite being told with furry
          characters, this comic is aimed at anyone who wants to read such a
          simple story and everyday life, in a universe where humans,
          anthropomorphic animals, and regular animals coexist.
        </p>
      </article>
      <aside className="relative w-full h-full py-3 border-4 border-black xl:w-3/4 px-7">
        parallax content here, on hover; filp contents
      </aside>
    </section>
  )
}
