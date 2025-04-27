import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { menuItems } from "./Menu";

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
					<p>Placeholder</p>
					<p>NANTES</p>
					<p>
						Email :
						<a href="mailto:contact@microset.com" className="hover:underline">
							contact@microset.com
						</a>
					</p>
					<p>
						Tél :
						<a href="tel:+335 56 40 31 44" className="hover:underline">
							+33 5 56 40 31 44
						</a>
					</p>
				</div>

				{/* Réseaux sociaux */}
				<div>
					<h3 className="text-lg font-semibold mb-3">Suivez-nous</h3>
					<div className="flex space-x-4">
						<a href="/" className="hover:text-gray-700">
							<FaInstagram size={24} />
						</a>
						<a href="/" className="hover:text-gray-700">
							<FaTwitter size={24} />
						</a>
						<a href="/" className="hover:text-gray-700">
							<FaLinkedin size={24} />
						</a>
					</div>
				</div>

				{/* Mentions & crédits */}
				<div>
					<h3 className="text-lg font-semibold mb-3">Légal</h3>
					<ul className="space-y-2">
						<li>
							<a href="/mentions" className="hover:underline">
								Mentions légales
							</a>
						</li>
						<li>
							<a href="/confidentialite" className="hover:underline">
								Politique de confidentialité
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
