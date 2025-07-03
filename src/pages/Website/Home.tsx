import Abonnement from "../../components/Website/Abonnement";
import Demo from "../../components/Website/Demo";
import FAQSection from "../../components/Website/FaqSection";
import Fonctionnality from "../../components/Website/Fonctionnality";
import Footer from "../../components/Website/Footer";
import Header from "../../components/Website/Header";
import Heading from "../../components/Website/Heading";
import NavBar from "../../components/Website/Menu/Navbar";
import Partenaire from "../../components/Website/Partenaire";
import Temoignages from "../../components/Website/Temoignages";

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="px-3 mx-2 mt-15 bg-white rounded-xl md:px-16 md:mt-20 lg:px-26">
        <Header />
        <Partenaire />
        <Heading title="Fonctionnalites" id="Fonctionnality">
          Katalo, c'est plus qu'un catalogue: C'est votre mini boutique en
          ligne, prete a l'emploi.
        </Heading>
        <Fonctionnality />
        <Demo />
        <Heading title="Temoignages" id="temoignage">
          Ils utilisents deja Katalo au quotidien. Voici Ce qu'ils en pensent.
        </Heading>
        <Temoignages />
        <Heading
          title="Abonnements"
          id="Abonnement"
          className="bg-transparent text-black text-3xl"
        >
          Que vous soyez artisan, commercant ou PME, Katalo s'adapte a votre
          activite, Choisissez le plan qui vous convient: commencez
          gratuitement, et passez a l'essentiel des que vous etes pret. Sans
          engagement. Sans surprise.
        </Heading>
        <Abonnement />

        <h3 className="text-3xl font-semibold mt-20">
          Questions Frequemment poses
        </h3>
        <FAQSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
