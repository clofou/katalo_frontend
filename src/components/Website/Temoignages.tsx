import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const temoignages = [
  {
    nom: "Alice",
    texte: "Katalo m’a permis de vendre facilement mes créations en ligne !",
  },
  {
    nom: "Jean",
    texte: "Simple, rapide, efficace. Je recommande à tous les commerçants.",
  },
  {
    nom: "Fatou",
    texte: "L’outil parfait pour lancer ma boutique sans prise de tête.",
  },
];

// Composant bulle inchangé
type TemoignageCardProps = {
  nom: string;
  texte: string;
};

function TemoignageCard({ nom, texte }: TemoignageCardProps) {
  return (
    <div
      className="relative flex flex-col items-start justify-center min-w-[300px] max-w-[320px]"
      aria-label={`Témoignage de ${nom}`}
    >
      <blockquote className="h-30 relative bg-black text-white px-6 py-5 rounded-2xl shadow-lg border-2 border-[#f6a623] text-lg italic text-center before:content-[''] before:absolute before:left-[10%] before:-bottom-4 before:-translate-x-1/3 before:border-x-15 before:border-x-transparent before:border-t-[16px] before:border-t-black before:drop-shadow-[0_2px_0_#f6a623]">
        “{texte}”
      </blockquote>
      <div className="mt-7 font-bold text-[#f6a623] w-20 text-center text-base">
        {nom}
      </div>
    </div>
  );
}

export default function Temoignages() {
  return (
    <section
      id="temoignages"
      className="my-10 flex items-center justify-center bg-black min-h-[340px] h-[540px] w-full overflow-hidden rounded-3xl"
      aria-label="Témoignages clients"
    >
      <div className="w-full flex items-center justify-center overflow-x-hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={0}
          loop={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={600}
          onSlideChange={(swiper) => {
            // Quand on arrive à la fin, on saute rapidement au début
            if (swiper.isEnd) {
              setTimeout(() => {
                swiper.slideTo(0, 200); // 200ms pour le retour rapide
              }, 3000);
            }
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 2,
              centeredSlides: true,
            },
          }}
          style={{ width: "100%", display: "flex", alignItems: "center" }}
        >
          {temoignages.map((t, i) => (
            <SwiperSlide key={i} style={{ display: "flex", justifyContent: "center" }}>
              <TemoignageCard nom={t.nom} texte={t.texte} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}