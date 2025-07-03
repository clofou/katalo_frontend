import clsx from "clsx";

type AbonnementProps = {
  plan: string;
  montant: number;
  fonctionnalityList: Array<string>;
  theme?: "black" | "white";
};

function AbonnementCard({
  plan,
  montant,
  fonctionnalityList,
  theme = "white",
}: AbonnementProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-8 w-full md:w-1/3 p-3 border-1 border-black rounded-xl min-h-200 shadow-[0_4px_0px_0px_rgba(0,0,0,1)]",
        theme == "black" && "bg-black text-white"
      )}
    >
      <div className="text-xl font-semibold">Plan {plan}</div>
      <div className="text-2xl font-semibold">
        CFA {montant} <span className="text-sm font-light">/mois</span>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <button
            className={clsx(
              "btn btn-primary w-full",
              theme == "white" && "shadow-gray-300",
              theme == "black" && "shadow-gray-700"
            )}
          >
            Commencez
          </button>
        </div>
        <div>
          <button className={clsx(
              "btn btn-secondary w-full",
              theme == "white" && "shadow-gray-300",
              theme == "black" && "shadow-gray-700"
            )}>
            Requete d'essai
          </button>
        </div>
      </div>
      <hr />
      <ul>
        {fonctionnalityList.map((fonctionnality, idx) => {
          return (
            <div className="flex gap-4 align-top mb-4" key={plan + idx}>
              <div>
                <img src="/assets/acceuil/el_ok.png" alt="check" />
              </div>
              <div>
                <p>{fonctionnality}</p>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default AbonnementCard;
