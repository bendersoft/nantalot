import { FaInstagram } from "react-icons/fa";
import { menuItems } from "../utils/menu-util";

const Footer = () => {
	return (
		<footer className="bg-teal-900 text-gray-200 py-8">
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{/* Navigation */}

				<div>
					<h3 className="text-lg font-semibold mb-3">Navigation</h3>
					<ul className="space-y-2">
						{Object.entries(menuItems).map(([key, { title, href }]) => (
							<li key={key}>
								<a href={href} className="hover:underline">
									{title}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Contact */}
				<div>
					<h3 className="text-lg font-semibold mb-3">Contact</h3>
					<p>NANTALOT</p>
					<p>Ponton Belem</p>
					<p>Quai de la Fosse</p>
					<p>44000 Nantes</p>
					<p>
						<a href="mailto:contact@microset.com" className="hover:underline">
						contactnantalot@gmail.com
						</a>
					</p>
					<p>
						Tél :
						<a href="tel:+335 56 40 31 44" className="hover:underline">
							+336 22 12 95 03
						</a>
					</p>
				</div>

				{/* Réseaux sociaux */}
				<div>
					<h3 className="text-lg font-semibold mb-3">Suivez-nous</h3>
					<div className="flex space-x-4">
						<a href="https://www.instagram.com/nantalot44/" className="hover:text-gray-200 flex gap-2 ">
							<FaInstagram size={24} />
							<span>@nantalot44</span>
						</a>
					</div>
				</div>

				{/* Mentions & crédits */}
				<div>
					<h3 className="text-lg font-semibold mb-3">Légal</h3>
					<ul className="space-y-2">
						<li>
							<a href="/info/mentions" className="hover:underline">
								Mentions légales
							</a>
						</li>
					</ul>
				</div>
			</div>

			{/* Copyright */}
			<div className="text-center text-sm pt-4">
				© 2025 NANTALOT ing. SARL - Réalisation : Gobisoft
			</div>
		</footer>
	);
};

export default Footer;
