import type React from "react";
import TextSection from "../components/TextSection";
import { DiVim } from "react-icons/di";

const ContactsPage: React.FC = () => {
  return (
    <main >
      <TextSection
        title="À propos de notre nous"
        content={
          <>
          <p className="text-pretty"> Embarquez pour une croisière unique sur la Loire et ses affluents et
          découvrez Nantes sous un angle inédit !</p>
          <p>Paysages surprenants, histoires singulières, lumières fabuleuses au raz de l&bdquoeau, le tout vu du fleuve, pour un dépaysement instantané.
          </p>
          <br />
<p>Que ce soit avec votre groupe d&apos;amis ou en famille, pour un grand évènement ou juste pour le plaisir, choisissez la croisière qui vous convient et privatisez notre bateau pour vivre un moment hors du temps.</p>
          </>
        }
      />
                  <section className="bg-[url('/2.jpg')] bg-cover bg-center h-40 sm:h-60 w-full" />

      <TextSection
        title="Contactez-nous"
        content={
            <div className="flex flex-col gap-8" >
            <p className="w-64 mx-auto text-center">
            NANTALOT
        contactez-nous
pour privatiser notre bateau
et créer l&apos;évènement idéal.
        </p>
          <ul className="list-none space-y-2">
            <li>
              <strong>Adresse:</strong> 123 Rue de l&apos;Innovation, 75000 Paris, France
            </li>
            <li>
              <strong>Téléphone:</strong> +33 1 23 45 67 89
            </li>
            <li>
              <strong>Email:</strong> contact@nantalot.com
            </li>
          </ul>
          </div>
        }
        bgColor="bg-teal-100"
        textColor="text-gray-900"
      />

<section className="bg-[url('/hero.jpg')] bg-cover bg-center text-teal-400 text-center h-40 sm:h-60 py-24 relative">
        <div className="relative z-10">
   <img src="/logoNantalot.png" alt="Logo of Nantalot" className="w-24 mx-auto bg-white bg-opacity-50 p-2" />
        </div>
      </section>
    </main>
  );
};

export default ContactsPage;