import Link from "next/link"

interface ClickableUI<T> {
  children?: React.ReactNode
  link?: string
  onClick?: React.MouseEventHandler<T>
  onTap?: React.TouchEventHandler<T>
  className?: string
  disabled?: boolean
}

export function Button({
  children,
  link: useLink,
  onClick,
  className,
}: ClickableUI<HTMLButtonElement>) {
  return !useLink ? (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  ) : (
    <Link href={useLink ?? ""} className={className}>
      {children}
    </Link>
  )
}
