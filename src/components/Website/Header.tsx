import { NavLink } from "react-router-dom";

function Header() {
  return (
    <section className="flex flex-col-reverse md:flex-row h-140 mt-15 md:mt-0" id="Acceuil">
      <div className="w-full flex justify-around flex-col gap-6">
        <h1 className="text-3xl text-black lg:text-5xl text-center font-semibold">
          Organisez vos{" "}
          <span className="relative inline-block">
            <span className="relative z-10">catalogues</span>
            <img
              src="/assets/acceuil/brush-underline.svg"
              alt=""
              className="absolute z-0 left-0 bottom-0 w-full pointer-events-none select-none"
              style={{ transform: "rotate(-4deg) translateY(60%)" }}
              aria-hidden="true"
            />
          </span>{" "}
          en un clic et mettez en vente vos produits
          <img
            className="inline"
            src="/assets/acceuil/512.gif"
            alt=""
            width={35}
          />
        </h1>
        <div className="flex gap-4 justify-center">
          <button className="btn btn-primary">Prendre un Abonnement</button>
          <NavLink to={"/connexion"} className="btn btn-secondary">
            Se Connecter
          </NavLink>
        </div>
      </div>
      <div className="w-full h-full relative">
        <img
          src="/assets/acceuil/Ellipse.png"
          alt=""
          className="absolute w-3/4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <iframe
          src="https://my.spline.design/untitled-9v961Deqypi8x9KdUvJHqobm/"
          className="relative z-0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </section>
  );
}

export default Header;
