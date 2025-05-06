import type React from 'react';

const ContactsPage: React.FC = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Contacts</h1>
            <section>
                <h2>À propos de notre entreprise</h2>
                <p>
                    Bienvenue chez Nantalot! Nous sommes une entreprise dédiée à fournir des solutions innovantes pour nos clients. 
                    Notre mission est de créer de la valeur et de bâtir des relations durables.
                </p>
            </section>
            <section>
                <h2>Contactez-nous</h2>
                <ul>
                    <li><strong>Adresse:</strong> 123 Rue de l'Innovation, 75000 Paris, France</li>
                    <li><strong>Téléphone:</strong> +33 1 23 45 67 89</li>
                    <li><strong>Email:</strong> contact@nantalot.com</li>
                </ul>
            </section>
        </div>
    );
};

export default ContactsPage;