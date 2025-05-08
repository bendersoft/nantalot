"use client";
import { usePathname } from "next/navigation";

export const menuItems = {
	"accueil": {
		id: "accueil",
		title: "Accueil",
		href: "/",
	},
	"particuliers": {
		id: "particuliers",
		title: "Particuliers",
		href: "/particuliers",
	},
	"entreprises": {
		id: "entreprises",
		title: "Entreprises",
		href: "/entreprises",
	},
	"contact": {
		id: "contact",
		title: "Contact",
		href: "/contact",
	},
};

function Menu() {
	const pathname = usePathname();

	return (
		<header className="flex border-b-1 border-b-teal-500 bg-gray-50 text-gray-100 font-semibold z-50 sticky top-0 h-20">
			<img src="/logoNantalot.png" alt="Logo of Nantalot" className="mx-auto" />
			<nav className="flex justify-between items-center p-4 max-w-7xl mx-auto h-full">
				<ul className="flex space-x-8 items-center h-full">
					{Object.entries(menuItems).map(([key, { id, title, href }]) => {
						const isActive = pathname === href;
						return (
							<li key={id}>
								<a
									href={href}
									className={`flex items-center h-full px-3 py-2 rounded-2xl ${
										isActive && id !== "contact"
											? "underline underline-offset-4 decoration-teal-500 decoration-2"
											: "text-gray-800 hover:text-teal-500"
									} ${
										id === "contact"
											? "bg-teal-600 text-gray-100 hover:bg-teal-700"
											: "text-gray-800 hover:text-teal-500"
									}`}
								>
									{title}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}

export default Menu;
