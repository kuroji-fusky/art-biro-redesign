import Image from "next/image";

export default function Navbar() {
  const navItemsResponsive: React.CSSProperties = {
    fontSize: "max(2rem, calc(0.5rem + 1.55vw))",
  };

  const buttonResponsive: React.CSSProperties = {
    paddingBlock: "0.15rem",
    paddingInline: "max(1vw, 1rem)",
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black">
      <div
        className="flex items-center justify-between px-12 select-none"
        style={{ paddingBlock: "max(0.25rem, 1.2vw)" }}
      >
        <div className="relative h-20" style={{ width: "max(2vw, 6.5rem)" }}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <nav style={navItemsResponsive}>
          <ul className="flex items-center gap-12 font-mouse-memoirs">
            <li>Comics</li>
            <li>Fanart</li>
            <li>Contact</li>
            <li>
              <button
                className="text-white bg-orange-400 rounded-lg hover:bg-orange-500"
                style={buttonResponsive}
              >
                Available at Ko-Fi
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
