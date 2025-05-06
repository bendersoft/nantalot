export default function Home() {
  return (
    <main className="w-full">
      {/* Section 1 - Hero */}
      <section className="bg-[url('/hero.jpg')] bg-cover bg-center text-teal-400 text-center py-24">
        <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Bienvenue sur Nantalot</h1>
        <p className="mt-4 text-lg font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Balades en bateau sur la Loire à Nantes</p>
      </section>

      {/* Section 2 - Présentation */}
      <section className="bg-white text-gray-800 py-16 px-6 max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-teal-700">Explorez la Loire et ses affluents</h2>
        <p className="italic text-gray-500">L’aventure fluviale au cœur de la ville</p>
        <p>
          Rejoignez-nous au ponton Bélem pour une navigation d’une à plusieurs heures...
        </p>
      </section>

      {/* Section 3 - Pour qui ? */}
      <section className="bg-teal-900 py-16 px-6 space-y-6">
        <h2 className="text-2xl text-center font-semibold text-gray-100">Pour qui ?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto font-semibold text-gray-800">
          <a type="button" href="/entreprises" className="bg-white p-6 rounded-lg shadow text-center">Entreprises</a>
          <a type="button" href="/entreprises" className="bg-white p-6 rounded-lg shadow text-center">Groupes & Familles</a>
          <a type="button" href="/entreprises" className="bg-white p-6 rounded-lg shadow text-center">Associations</a>
        </div>
      </section>

      {/* Section 4 - Image plein écran */}
      <section className="bg-[url('/2.jpg')] bg-cover bg-center h-64 sm:h-96 w-full" />

      {/* Section 5 - Le bateau */}
      <section className="bg-white py-16 px-6 max-w-5xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-teal-700">Le bateau</h2>
        <p>Un espace lumineux de 40 m² idéal pour :</p>
        <ul className="list-disc list-inside text-gray-800">
          <li>Anniversaires, mariages, séminaires</li>
          <li>Afterworks, départs en retraite</li>
          <li>Apéritifs, repas traiteurs, etc.</li>
        </ul>
      </section>

      {/* Section 6 - Partenaires */}
      <section className="bg-teal-100 py-16 px-6 max-w-5xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-teal-900">Avec qui</h2>
        <ul className="list-disc list-inside text-gray-800">
          <li>Domaine des Trois Toits</li>
          <li>Restaurant NOUS</li>
          <li>Traiteur Delicatessaine</li>
        </ul>
        <p>Et bien d'autres partenaires pour des moments gourmands à bord.</p>
      </section>

      {/* Section 7 - CTA finale */}
      <section className="bg-[url('/3.jpg')] bg-cover bg-center text-white text-center py-24 px-6">
      <div className="bg-teal-800 bg-opacity-10 p-6 max-w-md mx-auto">
        <h2 className="text-3xl font-bold">Prêt pour l'aventure ?</h2>
        <p className="mt-4">Réservez votre balade et vivez une expérience mémorable</p>
        <button type="button" className="mt-6 px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-full text-white font-semibold">
          Réserver maintenant
        </button>
        </div>
      </section>
    </main>
  );
}
