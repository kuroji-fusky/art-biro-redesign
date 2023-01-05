import styles from "./ComicAbout.module.scss"

export function ComicAbout() {
  return (
    <section className={styles["dual-strip-group"]}>
      <article className={styles["left-strip"]}>
        <h2>About</h2>
        <p>
          <strong>Art & Biro</strong> is a project born of the need to share a
          positive message about friendship. Despite being told with furry
          characters, this comic is aimed at anyone who wants to read such a
          simple story and everyday life, in a universe where humans,
          anthropomorphic animals, and regular animals coexist.
        </p>
      </article>
      <aside
        className={styles["right-strip"]}
      >
        parallax content here, on hover; filp contents
      </aside>
    </section>
  )
}
