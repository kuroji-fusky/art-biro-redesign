import useSectionTransition from "../../hooks/useSectionTransition"

export function Fanart() {
  const { ref, visible } = useSectionTransition("0px 0px -55.5% 0px")

  return <section ref={ref} className="bg-red-100 h-[110vh] w-full"></section>
}
