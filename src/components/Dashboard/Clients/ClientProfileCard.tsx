import { Phone, MapPin, Copy } from "lucide-react";
import type { Client, ClientOrder } from "./types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PRIMARY_COLOR = "#f6a623";

type Props = {
  client: Client;
  orders: ClientOrder[];
};

export function ClientProfileCard({ client, orders }: Props) {
  // Calculs pour le donut
  const total = client.stats.total || 1;
  const completed = client.stats.completed;
  const canceled = client.stats.canceled;
  const completedPct = Math.round((completed / total) * 100);
  const canceledPct = Math.round((canceled / total) * 100);
  const pendingPct = 100 - completedPct - canceledPct;

  // Donut chart SVG (responsive)
  const radius = 32;
  const circ = 2 * Math.PI * radius;
  const completedLen = (completedPct / 100) * circ;
  const canceledLen = (canceledPct / 100) * circ;
  const pendingLen = (pendingPct / 100) * circ;

  return (
    <Card className="bg-white dark:bg-[#181f2a] rounded-2xl shadow p-4 sm:p-6 w-full max-w-xs mx-auto sm:mx-0 border-0">
      <CardContent className="p-0">
        <div className="flex flex-col items-center gap-2 mb-4">
          <img
            src={client.avatarUrl || "/assets/avatar-default.png"}
            alt={client.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2"
            style={{ borderColor: PRIMARY_COLOR }}
          />
          <div className="font-bold text-base sm:text-lg text-center">
            {client.name}
          </div>
          <div className="text-gray-500 text-xs sm:text-sm flex items-center gap-1 break-all">
            {client.email}
            <button
              className="ml-1 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => navigator.clipboard.writeText(client.email)}
              title="Copier l'email"
              type="button"
            >
              <Copy size={14} />
            </button>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1 text-xs sm:text-sm">
            <Phone size={16} className="text-gray-400" />
            <span>{client.phone || "-"}</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <MapPin size={16} className="text-gray-400" />
            <span>{client.address || "-"}</span>
          </div>
        </div>
        <div className="flex gap-2 justify-center mb-3 flex-wrap">
          {client.social?.facebook && (
            <a
              href={client.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/social/facebook.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
          )}
          {client.social?.whatsapp && (
            <a
              href={client.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/social/whatsapp.svg"
                alt="WhatsApp"
                className="w-6 h-6"
              />
            </a>
          )}
          {client.social?.twitter && (
            <a
              href={client.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/social/twitter.svg"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
          )}
          {client.social?.linkedin && (
            <a
              href={client.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/social/linkedin.svg"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
          )}
          {client.social?.instagram && (
            <a
              href={client.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/social/instagram.svg"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
          )}
        </div>
        <div className="mb-3 text-xs text-gray-500">
          <div>Inscription : {client.registrationDate}</div>
          <div>Dernier achat : {client.lastPurchase}</div>
        </div>
        <Separator className="my-4" />
        {/* Donut chart "waouh" */}
        <div className="flex flex-col items-center my-4">
          <div className="relative w-24 h-24">
            <svg width="96" height="96" viewBox="0 0 96 96">
              <circle
                cx="48"
                cy="48"
                r={radius}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="10"
              />
              <circle
                cx="48"
                cy="48"
                r={radius}
                fill="none"
                stroke={PRIMARY_COLOR}
                strokeWidth="10"
                strokeDasharray={`${completedLen} ${circ - completedLen}`}
                strokeDashoffset="0"
                strokeLinecap="round"
              />
              <circle
                cx="48"
                cy="48"
                r={radius}
                fill="none"
                stroke="#f87171"
                strokeWidth="10"
                strokeDasharray={`${canceledLen} ${circ - canceledLen}`}
                strokeDashoffset={-completedLen}
                strokeLinecap="round"
              />
              <circle
                cx="48"
                cy="48"
                r={radius}
                fill="none"
                stroke="#facc15"
                strokeWidth="10"
                strokeDasharray={`${pendingLen} ${circ - pendingLen}`}
                strokeDashoffset={-(completedLen + canceledLen)}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className="font-bold text-lg"
                style={{ color: PRIMARY_COLOR }}
              >
                {client.stats.total}
              </span>
              <span className="text-xs text-gray-500">Commandes</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-2 text-xs">
            <Badge style={{ background: PRIMARY_COLOR, color: "#fff" }}>
              {completedPct}% Livrées
            </Badge>
            <Badge
              variant="outline"
              className="border-yellow-400 text-yellow-600"
            >
              {pendingPct}% En cours
            </Badge>
            <Badge variant="outline" className="border-red-400 text-red-600">
              {canceledPct}% Annulées
            </Badge>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="mt-2">
          <div
            className="font-semibold mb-2 text-center text-sm"
            style={{ color: PRIMARY_COLOR }}
          >
            Commandes récentes
          </div>
          <ul className="text-xs">
            {orders.length === 0 ? (
              <li className="text-gray-400 text-center">Aucune commande</li>
            ) : (
              orders.slice(0, 3).map((order) => (
                <li
                  key={order.id}
                  className="flex justify-between py-1 border-b last:border-b-0"
                >
                  <span>{order.date}</span>
                  <span className="font-medium">{order.total} €</span>
                  <span
                    className={
                      order.status === "Completed"
                        ? "text-green-500"
                        : order.status === "Pending"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }
                  >
                    {order.status}
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
