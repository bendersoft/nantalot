
export default function Home() {
  return (
    <div>
      <section className="hero">
                <h1>Bienvenue sur Nantalot</h1>
                <p>Découvrez des balades inoubliables en bateau sur la Loire à Nantes.</p>
            </section>
            <section className="about">
                <h2>À propos de Nantalot</h2>
                <p>
                    Nantalot vous propose des excursions uniques pour explorer la beauté de la Loire et ses environs. 
                    Profitez d'une expérience authentique et relaxante à bord de nos bateaux.
                </p>
            </section>
            <section className="cta">
                <h2>Prêt pour l'aventure ?</h2>
                <p>Réservez votre balade dès aujourd'hui et vivez une expérience mémorable.</p>
                <button type='button' className="btn-reservation">Réserver maintenant</button>
            </section>
    </div>
  );
}
