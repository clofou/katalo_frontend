function Footer() {
  return (
    <footer className="m-auto w-full bg-black text-white px-6 py-10 rounded-tl-2xl rounded-tr-2xl flex flex-col gap-9">
      <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
        <div>
          <img src="/assets/acceuil/LOGO_blanc.png" alt="Logo du site" />
        </div>
        <nav>
          <ul className="flex flex-col gap-1 md:flex-row justify-around md:gap-6 underline">
            <li>
              <a href="/#Acceuil">Acceuil</a>
            </li>
            <li>
              <a href="/#Fonctionnality">Fonctionnalites</a>
            </li>
            <li>
              <a href="/#FAQ">FAQ</a>
            </li>
            <li>
              <a href="/#Abonnement">Abonnement</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-3">
          <div>
            <img
              src="/assets/acceuil/Icône Social Facebook.png"
              alt="Reseau de facebook"
            />
          </div>
          <div>
            <img
              src="/assets/acceuil/Icône Social Linkedin.png"
              alt="Reseau de Linkedin"
            />
          </div>
          <div>
            <img
              src="/assets/acceuil/Icône Social Twitter.png"
              alt="Reseau de twitter"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-9 flex-col md:flex-row">
        <div className="flex flex-col items-center text-center md:text-start md:items-start flex-1/3">
          <h3 className="highlight inline-block mb-6">Contactez-nous</h3>
          <address>
            <p>Email: info@katalo.com</p>
            <p>Telephone: 223 85 858 85 85</p>
            <p>Adresse: Bamako Lafiabougou Koda</p>
          </address>
        </div>
        <div className="flex-2/3 px-4 py-12 bg-gray-800 rounded-2xl">
          <form action="" className="flex gap-4 flex-col md:flex-row ">
            <div>
              <input className="input" type="email" placeholder="Email" />
            </div>
            <button type="submit" className="btn btn-primary shadow-none">S'inscrire a la newsletter</button>
          </form>
        </div>
      </div>
      <hr />
      <div className="flex gap-4">
        <p>@ 2025 Katalo. Tous droits reserves.</p>
        <div>
          <a href="/politique" className="underline">Politique de confidentialite</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
