export const menuItems = {
	"accueil": {
		title: "Accueil",
		href: "/",
	},
	"particuliers": {
		title: "Particuliers",
		href: "/particuliers",
	},
	"entreprises": {
		title: "Entreprises",
		href: "/entreprises",
	},
	"contact": {
		title: "Contact",
		href: "/contacts",
	},
};

function Menu() {

	return (
		<header className="border-b-1 border-b-teal-500 bg-gray-50 text-gray-100 font-semibold z-50 sticky top-0 h-24">
			<nav className="flex justify-between items-center p-4">
				<div className="text-lg">Logo</div>
				<ul className="flex space-x-4 items-center">
					{Object.entries(menuItems).map(([key, { title, href }]) => (
						<li key={key} className="text-gray-800 hover:text-teal-500 align-">
							<a href={href} className="hover:underline">
								{title}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Menu;
