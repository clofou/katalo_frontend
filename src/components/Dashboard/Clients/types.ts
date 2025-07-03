export type Client = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  avatarUrl?: string;
  registrationDate: string;
  lastPurchase: string;
  social?: {
    facebook?: string;
    whatsapp?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  stats: {
    total: number;
    completed: number;
    canceled: number;
  };
};

export type ClientOrder = {
  id: string;
  date: string;
  status: "Completed" | "Pending" | "Canceled";
  total: number;
};


// Couleur principale
export const PRIMARY_COLOR = "bg-[#f6a623]"; // bleu principal