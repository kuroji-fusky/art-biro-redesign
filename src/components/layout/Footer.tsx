export default function Footer() {
  return (
    <footer className="px-10 py-8">
      <div className="flex justify-between">
        <span>{`Copyright ${new Date().getFullYear()}, redesigned by Kuroji Fusky`}</span>
        <div className="flex gap-4"></div>
      </div>
    </footer>
  )
}
