const logos = [
  "/assets/acceuil/Company logo-1.png",
  "/assets/acceuil/Company logo-2.png",
  "/assets/acceuil/Company logo-3.png",
  "/assets/acceuil/Company logo.png",
];

function Partenaire() {
  return (
    <div className="overflow-hidden w-full py-8 bg-white">
      <div className="relative w-full h-16">
        <div className="partenaire-marquee-track h-16 items-center">
          {[...logos, ...logos].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`partenaire${idx % logos.length + 1}`}
              className="h-12 object-contain"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partenaire;