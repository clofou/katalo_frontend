const VerificationForm = () => (
  <form className="flex flex-col gap-4">
    <input
      type="number"
      className="input text-black font-medium"
      placeholder="Entrer le code"
    />
    <p className="text-sm">
          Vous n'avez pas recu de code ?{" "}
          <button
            className="text-[#f6a623] cursor-pointer hover:underline"
          >
            Renvoyez
          </button>
        </p>

    <button type="submit" className="btn btn-primary">
      Valider
    </button>

    
  </form>
);

export default VerificationForm;
