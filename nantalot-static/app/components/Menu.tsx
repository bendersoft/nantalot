"use client";
import { usePathname } from "next/navigation";
import { menuItems } from "../utils/menu-util";
import { useState } from "react";

function Menu() {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="flex flex-col sm:flex-row sm:justify-between border-b-1 border-b-teal-500 bg-gray-50 text-gray-100 font-semibold z-50 sticky top-0">
			<div className="flex justify-between items-center py-3 px-8 sm:p-4 max-w-7xl mx-auto w-full sm:w-fit">
				<img src="/logoNantalot.png" alt="Logo of Nantalot" className="h-10" />
				<button
					type="button"
					className="sm:hidden text-gray-800"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					{/* Hamburger Icon */}
					<span className="block w-6 h-0.5 bg-gray-800 mb-1" />
					<span className="block w-6 h-0.5 bg-gray-800 mb-1" />
					<span className="block w-6 h-0.5 bg-gray-800" />
				</button>
			</div>
			<nav
				className={`${
					isMenuOpen ? "block" : "hidden"
				} sm:flex justify-between items-center p-4 max-w-7xl mx-auto w-full sm:w-fit`}
			>
				<ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 items-center">
					{Object.entries(menuItems).map(([key, { id, title, href }]) => {
						const isActive = pathname === href;
						return (
							<li key={id}>
								<a
									href={href}
									className={`flex items-center px-3 py-2 rounded-2xl ${
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
