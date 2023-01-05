import { useEffect, useRef } from "react"

export function ComicAbout() {
  return (
    <section className="flex h-screen p-6 md:p-12 gap-x-10">
      <article className="relative h-full py-3 border-4 border-black px-7">
        <h2>About the comic</h2>
        <p>
          <strong>Art & Biro</strong> is a project born of the need to share a
          positive message about friendship. Despite being told with furry
          characters, this comic is aimed at anyone who wants to read such a
          simple story and everyday life, in a universe where humans,
          anthropomorphic animals, and regular animals coexist.
        </p>
      </article>
      <aside className="relative w-3/4 h-full py-3 border-4 border-black px-7"></aside>
    </section>
  )
}
