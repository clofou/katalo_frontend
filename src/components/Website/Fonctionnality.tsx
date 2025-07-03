import FonctionnalityCard from "./Card/FonctionalityCard";

function Fonctionnality() {
  return (
    <div className="flex flex-wrap justify-around gap-4">
      <div className="flex flex-col gap-4">
        <FonctionnalityCard
          title="Gestion dynamique des produits"
          iconPath="/assets/acceuil/Icône Commande.png"
          theme="white"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius
          quos ut, odit, deleniti porro, dolorum nulla placeat provident error
          dicta? Ducimus pariatur est fuga, adipisci aspernatur ullam
          consequatur minus! Aut esse eaque dolorem corrupti tempora rem
          distinctio recusandae quisquam fugit tempore iste consequatur
          aspernatur architecto accusantium voluptatum quibusdam maiores
          nesciunt reprehenderit, beatae ipsum quam, itaque rerum. Quis, odit
          sapiente?
        </FonctionnalityCard>
        <FonctionnalityCard
          title="Suivi d'activite & performance commerciale"
          iconPath="/assets/acceuil/Icône Stats.png"
          theme="black"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius
          quos ut, odit, deleniti porro, dolorum nulla placeat provident error
          dicta? Ducimus pariatur est fuga, adipisci aspernatur ullam
          consequatur minus! Aut esse eaque dolorem corrupti tempora rem
          distinctio recusandae quisquam fugit tempore iste consequatur
          aspernatur architecto accusantium voluptatum quibusdam maiores
          nesciunt reprehenderit, beatae ipsum quam, itaque rerum. Quis, odit
          sapiente?
        </FonctionnalityCard>
      </div>

      <div className="flex flex-col gap-4">
        <FonctionnalityCard
          title="Publication & Vitrine e-commerce instantanee"
          iconPath="/assets/acceuil/Icône e-commerce.png"
          theme="orange"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius
          quos ut, odit, deleniti porro, dolorum nulla placeat provident error
          dicta? Ducimus pariatur est fuga, adipisci aspernatur ullam
          consequatur minus! Aut esse eaque dolorem corrupti tempora rem
          distinctio recusandae quisquam fugit tempore iste consequatur
          aspernatur architecto accusantium voluptatum quibusdam maiores
          nesciunt reprehenderit, beatae ipsum quam, itaque rerum. Quis, odit
          sapiente?
        </FonctionnalityCard>
        <FonctionnalityCard
          title="Export professionnel multi-format"
          iconPath="/assets/acceuil/Icône File.png"
          theme="white"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius
          quos ut, odit, deleniti porro, dolorum nulla placeat provident error
          dicta? Ducimus pariatur est fuga, adipisci aspernatur ullam
          consequatur minus! Aut esse eaque dolorem corrupti tempora rem
          distinctio recusandae quisquam fugit tempore iste consequatur
          aspernatur architecto accusantium voluptatum quibusdam maiores
          nesciunt reprehenderit, beatae ipsum quam, itaque rerum. Quis, odit
          sapiente?
        </FonctionnalityCard>
      </div>
    </div>
  );
}

export default Fonctionnality;
