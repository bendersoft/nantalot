import type React from "react";
import TextSection from "../components/TextSection";

const ParticuliersPage: React.FC = () => {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      <TextSection
        title="Balades en bateau pour particuliers"
        content={
          <>
            Découvrez nos balades en bateau spécialement conçues pour les particuliers. 
            Profitez d&apos;une expérience unique sur l&apos;eau, que ce soit pour une sortie en famille, 
            entre amis ou pour une occasion spéciale.
          </>
        }
      />
      <TextSection
        title="Une expérience unique"
        content={
          <div className="flex flex-col gap-3" >
            Nos balades vous offrent une vue imprenable et un moment de détente inoubliable. 
            Réservez dès maintenant et laissez-vous porter par les flots !
            <div  className="flex flex-col justify-end">
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
        <p className="mt-4">Réservez votre balade et vivez une expérience mémorable</p>
        <button type="button" className="mt-6 px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-full text-white font-semibold">
          Réserver maintenant
        </button>
        </div>
      </section>
    </main>
  );
};

export default ParticuliersPage;