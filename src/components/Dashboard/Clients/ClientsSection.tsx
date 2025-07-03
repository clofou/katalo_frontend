import { useState } from "react";
import { ClientsTable } from "./ClientsTable";
import { ClientProfileCard } from "./ClientProfileCard";
import type { Client, ClientOrder } from "./types";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Users, UserPlus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddClientDialog } from "./AddClientDialog";
import { KpiCard } from "../Common/KpiCard";

const PRIMARY_COLOR = "#f6a623";

function ClientsKPI({
  clients,
  onAdd,
}: {
  clients: Client[];
  onAdd: () => void;
}) {
  const total = clients.length;
  const newClients = 2; // à calculer selon ta logique
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 items-stretch">
      <KpiCard
        title="Total Clients"
        value={total}
        icon={<Users style={{ color: PRIMARY_COLOR }} size={24} />}
      />
      <KpiCard
        title="Nouveaux Clients"
        value={newClients}
        icon={<UserPlus className="text-green-500" size={24} />}
        trend="+2 cette semaine"
        trendColor="text-green-600"
      />
      <div className="hidden lg:block" />
      <div className="flex items-end justify-end">
        <Button onClick={onAdd} variant={"default"}>
          <Plus size={18} /> Ajouter un client
        </Button>
      </div>
    </div>
  );
}

const demoClients: Client[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123 Main St, NY",
    avatarUrl: "/assets/avatar-default.png",
    registrationDate: "15.01.2025",
    lastPurchase: "10.01.2025",
    social: {
      facebook: "#",
      whatsapp: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    stats: { total: 150, completed: 140, canceled: 10 },
  },
  {
    id: "2",
    name: "Alice Martin",
    email: "alice.martin@email.com",
    phone: "0601020304",
    address: "Paris",
    avatarUrl: "/assets/avatar-default.png",
    registrationDate: "10.01.2025",
    lastPurchase: "09.01.2025",
    social: {},
    stats: { total: 80, completed: 75, canceled: 5 },
  },
];

const demoOrders: Record<string, ClientOrder[]> = {
  "1": [
    { id: "o1", date: "10.01.2025", status: "Completed", total: 120 },
    { id: "o2", date: "05.01.2025", status: "Pending", total: 80 },
    { id: "o3", date: "01.01.2025", status: "Canceled", total: 50 },
  ],
  "2": [
    { id: "o4", date: "09.01.2025", status: "Completed", total: 60 },
    { id: "o5", date: "08.01.2025", status: "Completed", total: 20 },
  ],
};

export function ClientsSection() {
  const [clients, setClients] = useState<Client[]>(demoClients);
  const [selected, setSelected] = useState<Client | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const orders = selected ? demoOrders[selected.id] || [] : [];

  const handleSelect = (client: Client) => {
    setSelected(client);
    if (window.innerWidth < 768) setShowDialog(true);
  };

  const handleAddClient = (client: Client) => {
    setClients((prev) => [...prev, client]);
    setShowAdd(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <ClientsKPI clients={clients} onAdd={() => setShowAdd(true)} />
      <div className="flex flex-col md:flex-row gap-6">
        <div
          className={`flex-1 transition-all ${
            selected ? "md:pr-2" : "md:pr-0"
          }`}
        >
          <ClientsTable
            clients={clients}
            onSelect={handleSelect}
            selectedId={selected?.id}
          />
        </div>
        {selected && (
          <div className="w-full md:w-[370px] shrink-0 hidden md:block">
            <ClientProfileCard client={selected} orders={orders} />
          </div>
        )}
      </div>
      {/* Mobile: fiche en popup */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-xs w-full p-0">
          {selected && <ClientProfileCard client={selected} orders={orders} />}
        </DialogContent>
      </Dialog>
      {/* Popup ajout client */}
      <Dialog open={showAdd} onOpenChange={setShowAdd}>
        <DialogContent className="max-w-md w-full">
          <AddClientDialog
            onAdd={handleAddClient}
            onClose={() => setShowAdd(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
