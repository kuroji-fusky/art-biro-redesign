export function AuthorAbout() {
  return (
    <section className="relative h-screen bg-cyan-400">
      <article className="flex flex-col items-center justify-center h-full text-center">
        <span>image</span>
        <h2>About the Author</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum neque
          consectetur cupiditate molestias officia vero nesciunt, quaerat dicta
          dolorem. Unde, nostrum?
        </p>
      </article>
      <div className="absolute bottom-0">scrollable carousel</div>
    </section>
  )
}
