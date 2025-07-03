import { User } from "lucide-react";
import type { Client } from "./types";

type Props = {
  clients: Client[];
  onSelect: (client: Client) => void;
  selectedId?: string;
};

export function ClientsTable({ clients, onSelect, selectedId }: Props) {
  return (
    <div className="overflow-x-auto rounded-lg shadow bg-white dark:bg-[#181f2a]">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-gray-50 dark:bg-[#232c3b] text-gray-700 dark:text-gray-200">
            <th className="py-3 px-4 text-left">Nom</th>
            <th className="py-3 px-4 text-left">Email</th>
            <th className="py-3 px-4 text-left">Téléphone</th>
            <th className="py-3 px-4 text-left">Inscrit le</th>
            <th className="py-3 px-4 text-left">Commandes</th>
          </tr>
        </thead>
        <tbody>
          {clients.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-8 text-center text-gray-400">
                <User className="mx-auto mb-2" size={32} />
                Aucun client pour le moment.
              </td>
            </tr>
          ) : (
            clients.map((client) => (
              <tr
                key={client.id}
                className={`border-b last:border-b-0 cursor-pointer transition ${
                  selectedId === client.id
                    ? "bg-blue-50 dark:bg-blue-900/30"
                    : ""
                }`}
                onClick={() => onSelect(client)}
              >
                <td className="py-2 px-4 font-medium flex items-center gap-2">
                  {client.avatarUrl ? (
                    <img
                      src={client.avatarUrl}
                      alt={client.name}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-7 h-7 text-gray-400" />
                  )}
                  {client.name}
                </td>
                <td className="py-2 px-4">{client.email}</td>
                <td className="py-2 px-4">{client.phone || "-"}</td>
                <td className="py-2 px-4">{client.registrationDate}</td>
                <td className="py-2 px-4">{client.stats.total}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
