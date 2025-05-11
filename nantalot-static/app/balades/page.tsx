import type React from "react";
import TextSection from "../components/TextSection";
import BaladeSection from "../components/BaladeSection";

const BaladesPage: React.FC = () => {
	return (
		<main>
			<TextSection
				title="Balades en bateau pour particuliers"
				content="Découvrez nos balades en bateau spécialement conçues pour les particuliers. 
            Profitez d'une expérience unique sur l'eau, que ce soit pour une sortie en famille, 
            entre amis ou pour une occasion spéciale."
			/>

			<section className="bg-[url('/passerelle.jpg')] bg-cover bg-center h-52 sm:h-80 w-full" />
			<BaladeSection
				id="decouverte"
				title="La balade découverte"
				descriptionSubtitle="Votre croisière"
				description="Départ & arrivée depuis le ponton Belem, quai de la Fosse, à Nantes. Privatisation d’une durée de 2 heures
avec équipage de bord à votre service. Le trajet est adapté en fonction des conditions de marée pour garantir une expérience agréable et fluide. Autres points d’embarquement possibles : Parc
du Crapa, Trentemoult, Chantenay et Hangar à Bananes."
				mealSubtitle="Votre cocktail apéritif"
				mealDescription="1 verre de pétillant, 8 petits fours salés
et 4 douceurs sucrées, par personne. Vins disponibles en supplément, provenant de notre partenaire Le Domaine des Trois Toits."
				priceSubtitle="Prix"
				priceDescription="Croisière & cocktail-apéritif 38 € / personne pour 30 personnes. Prix dégressif selon le nombre de participants."
				bgColor="bg-teal-900"
				textColor="text-gray-100"
			/>

			<section className="bg-[url('/cocktail.jpg')] bg-cover bg-center h-52 sm:h-80 w-full" />
			<BaladeSection
				id="gourmande"
				title="L'escapade Gourmande"
				descriptionSubtitle="Votre croisière"
				description="Départ & arrivée depuis le ponton Belem, quai de la Fosse, à Nantes. Privatisation d’une durée de 2 heures
avec équipage de bord à votre service. Le trajet est adapté en fonction des conditions de marée pour garantir une expérience agréable et fluide. Autres points d’embarquement possibles : Parc
du Crapa, Trentemoult, Chantenay et Hangar à Bananes."
				mealSubtitle="Votre repas"
				mealDescription='réparé par notre partenaire, le restaurant "Nous". Une cuisine simple, gourmande et de saison à partir de produits bio et locaux.
Menu à composer :
1 verre de pétillant, entrée chaude ou froide,
plat du jour, dessert et café
En supplément : Vins issus du Domaine des Trois Toits et
un plateau de fromages pour compléter votre dégustation.'
				priceSubtitle="Prix"
				priceDescription="Croisière & cocktail-apéritif 49 € / personne pour 30 personnes. Prix dégressif selon le nombre de participants."
			/>

			<section className="bg-[url('/conduite_sunset.jpg')] bg-cover bg-center h-52 sm:h-80 w-full" />
			<BaladeSection
				id="fluviale"
				title="L'aventure Fluviale"
				descriptionSubtitle="Votre croisière sur mesure"
				description="Avec Nantalot, tout est possible ! Pour votre évènement, nous créons une croisière selon vos envies : Passer l’écluse et le tunnel Saint-Félix pour remonter l’Erdre, découvrir la Maison dans la Loire à Couëron, traverser le barrage de Pont Rousseau et partir à la découverte de la Sèvre Nantaise, remonter la Divatte et naviguer en amont de la Loire, pour des points de vue privilégiés, loin de l’agitation, pour une immersion totale. Plusieurs points de départ possible."
				mealSubtitle="Vos options"
				mealDescription="Nous vous proposons plusieurs formules adaptées à vos besoins avec choix des traiteurs et Cocktail apéritif, dinatoire présenté sur des mange-debout ou repas servi à table. Sélection de vins de notre partenaire, Le Domaine des Trois Toits, pour accompagner vos moments de convivialité."
				priceSubtitle="Prix"
				priceDescription="Première heure de navigation
420 € pour moins de 20 personnes,
530 € pour 20 à 40 personnes,
620 € pour plus de 40 personnes.
Tarif dégressif pour les heures supplémentaires.
Demandez un devis personnalisé selon vos envies et la
taille de votre groupe."
				bgColor="bg-teal-900"
				textColor="text-gray-100"
			/>

			<TextSection
				title="Une expérience unique"
				content={
					<div className="flex flex-col gap-3">
						Nos balades vous offrent une vue imprenable et un moment de détente
						inoubliable. Réservez dès maintenant et laissez-vous porter par les
						flots !
						<div className="flex flex-col justify-end">
							<a href="mailto:contact@microset.com" className="hover:underline">
								contactnantalot@gmail.com
							</a>
							<a href="tel:+335 56 40 31 44" className="hover:underline">
								+336 22 12 95 03
							</a>
						</div>
					</div>
				}
				bgColor="bg-teal-100"
				textColor="text-gray-900"
			/>
			<section className="bg-[url('/3.jpg')] bg-cover bg-center text-white text-center py-24 px-6">
				<div className="bg-teal-800 bg-opacity-10 p-6 max-w-md mx-auto">
					<h2 className="text-3xl font-bold">Prêt pour l&apos;aventure ?</h2>
					<p className="mt-4">
						Réservez une de nos balades ou créons la votre sur mesure
					</p>
					<button
						type="button"
						className="mt-6 px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-full text-white font-semibold"
					>
						Réserver
					</button>
				</div>
			</section>
		</main>
	);
};

export default BaladesPage;
