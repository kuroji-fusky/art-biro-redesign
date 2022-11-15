import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scroll, setScroll] = useState("25px");

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 250 ? setScroll("17px") : setScroll("25px");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed z-20 top-0 left-0 right-0">
      <motion.div
        id="container"
        className="mx-auto max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-8 flex items-center justify-between"
        animate={{ marginBlock: scroll }}
        transition={{ type: "tween", duration: 0.28 }}
      >
        <Link id="logo" href="/" className="relative w-[100px] h-[70px]">
          <Image src="/images/logo.png" alt="logo" fill />
        </Link>
        <nav className="font-mouse-memoirs" style={{ fontSize: "1.85rem" }}>
          <ul className="flex items-center gap-9 xl:gap-12">
            <NavbarItem name="Comics" link="/comic" />
            <NavbarItem name="Fanart" link="/fanart" />
            <NavbarItem name="Contact" link="/contact" />
            <Link
              href="#"
              className="px-5 py-0.5 bg-orange-500 hover:bg-orange-600 text-white rounded-md"
            >
              Available on Ko-Fi
            </Link>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}

interface NavbarItemProps {
  name: string;
  link: string;
}

function NavbarItem(props: NavbarItemProps) {
  return (
    <li>
      <Link href={props.link ?? ""}>{props.name}</Link>
    </li>
  );
}
