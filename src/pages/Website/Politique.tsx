import Footer from "../../components/Website/Footer";
import NavBar from "../../components/Website/Menu/Navbar";

function PolitiquePage() {
  const h2Style = "text-xl my-3 font-semibold";
  const listStyle = "list-disc flex flex-col gap-3 my-3 mx-10";
  const ellipse = {
    path: "/assets/acceuil/Ellipse.png",
    alt: "image Decoratif Ellipse background",
  };

  return (
    <div className="w-dvw">
      <img
        className="fixed top-2 right-0 w-100 z-0"
        src={ellipse.path}
        alt={ellipse.alt}
      />
      <img
        className="fixed top-60 left-0 w-50 z-0"
        src={ellipse.path}
        alt={ellipse.alt}
      />
      <img
        className="fixed top-100 left-70 w-90 z-0"
        src={ellipse.path}
        alt={ellipse.alt}
      />
      <img
        className="fixed top-200 left-0 w-70 z-0"
        src={ellipse.path}
        alt={ellipse.alt}
      />

      <NavBar />
      <div className="mx-5 mt-20 md:mx-16 lg:mx-26">
        <div className="relative flex flex-col items-start gap-8 my-4 md:flex-row md:my-30">
          <h1 className="hidden highlight text-2xl md:inline-block">
            Politique de confidentialite
          </h1>
          <div className="px-6 py-4 rounded-2xl shadow-[0_4px_0px_0px_rgba(0,0,0,1)] bg-white">
            <h1 className="highlight inline-block text-2xl mb-4 md:hidden">
              Politique de confidentialite
            </h1>
            <h2 className={h2Style}>1. 📌 Informations que nous collectons</h2>
            <p>
              Lorsque vous utilisez Katalo, nous pouvons collecter les
              informations suivantes :
              <ul className={listStyle}>
                <li>
                  Données d’inscription : nom, prénom, adresse e-mail, mot de
                  passe
                </li>
                <li>
                  Informations de profil : nom d’entreprise, numéro de
                  téléphone, adresse
                </li>
                <li>
                  Données de catalogue : fiches produits, fichiers importés
                  (CSV, Excel, images)
                </li>
                <li>
                  Données d’usage : historique d’actions, statistiques,
                  préférences
                </li>
                <li>
                  Données de paiement (si applicable) : via prestataires
                  sécurisés (ex. Stripe, PayDunya)
                </li>
              </ul>
            </p>
            <h2 className={h2Style}>2. 📥 Utilisation des données</h2>
            <p>
              Nous utilisons vos données pour :
              <ul className={listStyle}>
                <li>Fournir les services de gestion de catalogues </li>
                <li>Permettre la personnalisation de votre espace </li>
                <li>
                  Vous envoyer des notifications importantes (techniques,
                  support, mises à jour)
                </li>
                <li>Générer des statistiques d’usage anonymisées </li>
                <li>Gérer la facturation et l’assistance</li>
              </ul>
            </p>
            <h2 className={h2Style}>3. 📤 Partage des données</h2>
            <p>
              Vos données ne sont jamais revendues. Elles peuvent être partagées
              uniquement avec :
              <ul className={listStyle}>
                <li>Nos partenaires de paiement sécurisé</li>
                <li>Nos outils d’analyse interne uniquement </li>
                <li>Les autorités compétentes en cas d’obligation légale</li>
              </ul>
            </p>
            <h2 className={h2Style}>4. 🗄️ Stockage et sécurité</h2>
            <p>
              <ul className={listStyle}>
                <li>
                  Vos données sont hébergées en toute sécurité sur des serveurs
                  conformes aux normes européennes ou équivalentes.
                </li>
                <li>
                  Nous utilisons des protocoles de chiffrement, de sauvegarde et
                  de surveillance régulière.
                </li>
              </ul>
            </p>
            <h2 className={h2Style}>5. 🔑 Vos droits</h2>
            <p>
              Conformément au RGPD, vous avez les droits suivants :
              <ul className={listStyle}>
                <li>Accéder à vos données</li>
                <li>Rectifier ou supprimer vos données</li>
                <li>Demander la portabilité </li>
                <li>Retirer votre consentement</li>
                <li>Déposer une réclamation auprès de la CNIL</li>
              </ul>
            </p>
            <h2 className={h2Style}>6. 🍪 Cookies </h2>
            <p>
              Notre site utilise des cookies techniques pour garantir son bon
              fonctionnement. Vous pouvez les désactiver depuis votre
              navigateur. Aucun cookie publicitaire n’est utilisé sans votre
              consentement explicite.
            </p>
            <h2 className={h2Style}>7. 📞 Contact</h2>
            <p>
              Pour toute question ou demande relative à vos données
              personnelles, contactez-nous à : <br />
              <span className="highlight inline-block">
                Doniya SO <br />
                📧 contact@donniya-so.tech <br />
                📍 [Bamako Lafiabougou | +223 85 85 85 85]
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-dvw">
        <Footer />
      </div>
    </div>
  );
}

export default PolitiquePage;
