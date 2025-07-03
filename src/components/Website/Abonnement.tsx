import AbonnementCard from "./Card/AbonnementCard";

function Abonnement() {
  return (
    <section className="flex flex-col gap-4 w-full md:flex-row">
      <AbonnementCard
        plan="Basique"
        montant={5000}
        fonctionnalityList={["Fonctionnalite1", "Fonctionnalite2"]}
      />
      <AbonnementCard
        plan="Pro"
        montant={15000}
        theme="black"
        fonctionnalityList={["Fonctionnalite1", "Fonctionnalite2"]}
      />
      <AbonnementCard
        plan="Elite"
        montant={45000}
        fonctionnalityList={["Fonctionnalite1", "Fonctionnalite2"]}
      />
    </section>
  );
}

export default Abonnement;
