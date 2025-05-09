export default function MentionsLegales() {
    return (
      <main className="w-full p-6 py-12 space-y-6">
        <h1 className="text-xl sm:text-3xl font-bold text-center">Mentions Légales</h1>
        <section className="space-y-4">
          <h2 className="text-lg sm:text-2xl font-semibold">Éditeur du site</h2>
          <p>
            Ce site est édité par :
            <strong> Gobisoft</strong>
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-lg sm:text-2xl font-semibold">Hébergement</h2>
          <p>
            Le site est hébergé par : <br />
            <strong>[Nom de l&apos;hébergeur]</strong> <br />
            Adresse : [Adresse de l&apos;hébergeur] <br />
            Téléphone : [Numéro de l&apos;hébergeur] <br />
            Site web : [Lien vers le site de l&apos;hébergeur]
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-lg sm:text-2xl font-semibold">Propriété intellectuelle</h2>
          <p>
            Tous les contenus présents sur ce site (textes, images, logos, etc.)
            sont la propriété exclusive de <strong>Nantalot</strong>, sauf mention
            contraire. Toute reproduction, distribution ou utilisation sans
            autorisation préalable est interdite.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-lg sm:text-2xl font-semibold">Données personnelles</h2>
          <p>
            Ce site ne collecte aucune donnée personnelle. Aucune information
            concernant les visiteurs n&apos;est stockée ou partagée.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-lg sm:text-2xl font-semibold">Responsabilité</h2>
          <p>
            <strong>Nantalot</strong> ne peut être tenu responsable des dommages
            directs ou indirects résultant de l&apos;utilisation de ce site.
          </p>
        </section>
      </main>
    );
  }