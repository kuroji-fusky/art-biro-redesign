import Link from "next/link"

export function Navbar() {
	return (
		<header>
			<div id="container">
				<div id="logo"></div>
				<nav>
					<ul>
						<NavbarItem name="Comics" link="/comic" />
						<NavbarItem name="Fanart" link="/fanart" />
						<NavbarItem name="Contact" link="/contact" />
					</ul>
				</nav>
			</div>
		</header>
	)
};

interface NavbarItemProps {
	name: string
	link: string
}

function NavbarItem(props: NavbarItemProps) {
	return (
		<li>
			<Link href={props.link ?? ""}>
				{props.name}
			</Link>
		</li>
	)
}