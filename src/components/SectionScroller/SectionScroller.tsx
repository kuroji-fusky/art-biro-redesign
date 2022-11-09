import { LayoutProps } from "../Base/Layout"

interface SectionScrollerProps extends LayoutProps {
  name?: string
  className?: string
  ref?: React.LegacyRef<HTMLElement>
}

export default function SectionScroller(props: SectionScrollerProps) {
  return (
    <section ref={props.ref} className={props.className}>
      {props.children}
    </section>
  )
}
