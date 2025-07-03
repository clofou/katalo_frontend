function Demo() {
    return <section className="flex flex-col-reverse gap-8 md:flex-row justify-between items-start relative my-20 bg-gray-200 rounded-2xl p-10 md:pr-0">
        <div className="leftSection">
          <h3 className="text-xl text-black mb-6 font-semibold">Un Outil Clair, simple, moderne</h3>
          <p className="md:w-2/3 mb-10">
            Visualisez et modifiez vos fiches produits en toute simplicite.
            Ajoutez des images, des prix, des descriptions, des tags -- tous est
            la, sans complexite. Grace a une interface epuree, vous restez
            concentre sur l'essentiel : vos produits.
          </p>
          <button className="btn btn-secondary-dark">Essayer la demo</button>
        </div>
        <div>
            <img src="/assets/acceuil/ordi.png" width={800} alt="Ordinateur" />
        </div>
    </section>
}

export default Demo;