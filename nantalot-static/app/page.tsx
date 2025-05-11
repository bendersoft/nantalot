import TextSection from "./components/TextSection";

export default function Home() {
	return (
		<main className="w-full">
			{/* Section 1 - Hero */}
			<section className="bg-[url('/bateau1.jpg')] bg-cover bg-center text-teal-400 text-center py-16 sm:py-24 relative">
				<div className="flex flex-col gap-6 relative z-10">
					<img
						src="/logoNantalot.png"
						alt="Logo of Nantalot"
						className="w-24 mx-auto bg-white bg-opacity-50 p-2"
					/>
					<h1 className="text-4xl sm:text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
						Bienvenue à bord
					</h1>
					<p className="mt-4 text-lg font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
						Balades en bateau à Nantes
					</p>
				</div>
			</section>

			{/* Section 2 - Présentation */}
			<TextSection
				title="Explorez la Loire et ses affluents"
				subtitle="L’aventure fluviale au cœur de la ville"
				content="Rejoignez-nous au ponton Bélem pour une navigation d’une à plusieurs heures..."
			/>

			{/* Section 3 - Balades */}
			<section className="flex flex-col gap-8 bg-teal-900 p-12 sm:py-20">
				<h2 className="text-lg sm:text-2xl text-center font-semibold text-gray-100">
					Nos balades
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6  mx-auto font-semibold text-gray-800">
					<a href="/balades#decouverte">
						<div className="bg-white p-6 rounded-lg shadow text-center">
							<img
								src="/ponton_vue.jpg"
								alt="La balade découverte"
								className="w-full h-32 object-cover rounded-md mb-4"
							/>
							<h3 className="text-lg font-semibold">La découverte</h3>
							<p className="text-sm text-gray-600 mt-2">
								Une balade pour découvrir les merveilles de la Loire.
							</p>
						</div>
					</a>
					<a href="/balades#gourmande">
						<div className="bg-white p-6 rounded-lg shadow text-center">
							<img
								src="/cocktail.jpg"
								alt="L'escapade Gourmande"
								className="w-full h-32 object-cover rounded-md mb-4"
							/>
							<h3 className="text-lg font-semibold">La gourmande</h3>
							<p className="text-sm text-gray-600 mt-2">
								Savourez des spécialités locales tout en naviguant.
							</p>
						</div>
					</a>
					<a href="/balades#fluviale">
						<div className="bg-white p-6 rounded-lg shadow text-center">
							<img
								src="/conduite_sunset.jpg"
								alt="L'aventure Fluviale"
								className="w-full h-32 object-cover rounded-md mb-4"
							/>
							<h3 className="text-lg font-semibold">La fluviale</h3>
							<p className="text-sm text-gray-600 mt-2">
								Partez pour une aventure unique au fil de l'eau.
							</p>
						</div>
					</a>
				</div>
			</section>

			{/* Section 4 - Image plein écran */}
			<section className="bg-[url('/passerelle.jpg')] bg-cover bg-center h-64 sm:h-96 w-full" />

			{/* Section 5 - Le bateau */}
			<TextSection
				title="Le bateau"
				content="Un espace lumineux de 40 m² idéal pour :"
				listItems={[
					"Anniversaires, mariages, séminaires",
					"Afterworks, départs en retraite",
					"Apéritifs, repas traiteurs, etc.",
				]}
			/>

			{/* Section 6 - Partenaires */}
			<TextSection
				title="Avec qui"
				content="Et bien d'autres partenaires pour des moments gourmands à bord."
				listItems={[
					"Domaine des Trois Toits",
					"Restaurant NOUS",
					"Traiteur Delicatessaine",
				]}
				bgColor="bg-teal-100"
				textColor="text-gray-900"
			/>

			{/* Section 7 - CTA finale */}
			<section className="bg-[url('/3.jpg')] bg-cover bg-center text-white text-center py-12 sm:py-24 px-12 sm:px-6">
				<div className="flex flex-col gap-3 sm:gap-8 bg-teal-800 bg-opacity-10 p-4 sm:p-6 max-w-md mx-auto">
					<h2 className="text-lg sm:text-3xl font-bold">
						Prêt pour l&apos;aventure ?
					</h2>
					<p>Réservez votre balade et vivez une expérience mémorable</p>
					<button
						type="button"
						className="w-fit mx-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-full text-white font-semibold"
					>
						Réserver maintenant
					</button>
				</div>
			</section>
		</main>
	);
}
