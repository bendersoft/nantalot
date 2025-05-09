import type React from "react";
import TextSection from "../components/TextSection";

const EntreprisesPage: React.FC = () => {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      <TextSection
        title="Balades en bateau pour les entreprises"
        content={
          <>
            Offrez à votre équipe une expérience unique avec nos balades en bateau spécialement conçues pour les entreprises. 
            Renforcez les liens entre collègues tout en profitant d&apos;un moment de détente sur l&apos;eau.
          </>
        }
      />
      <TextSection
        title="Pourquoi choisir nos balades en bateau ?"
        content={
          <ul className="list-disc list-inside">
            <li>Moments de convivialité et de partage</li>
            <li>Découverte de paysages magnifiques</li>
            <li>Options personnalisées pour répondre à vos besoins</li>
          </ul>
        }
        bgColor="bg-teal-900"
        textColor="text-gray-100"
      />
      <TextSection
        title="Contactez-nous"
        content={
          <>
            Pour organiser une sortie en bateau pour votre entreprise, n&apos;hésitez pas à nous contacter. 
            Nous serons ravis de vous aider à planifier une expérience inoubliable.
          </>
        }
      />
      <section className="bg-[url('/3.jpg')] bg-cover bg-center text-white text-center py-12 sm:py-24 px-12 sm:px-6">
      <div className="flex flex-col gap-3 sm:gap-8 bg-teal-800 bg-opacity-10 p-4 sm:p-6 max-w-md mx-auto">
        <h2 className="text-lg sm:text-3xl font-bold">Prêt pour l&apos;aventure ?</h2>
        <p>Réservez votre balade et vivez une expérience mémorable</p>
        <button type="button" className="w-fit mx-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-full text-white font-semibold">
          Réserver maintenant
        </button>
        </div>
      </section>
    </main>
  );
};

export default EntreprisesPage;