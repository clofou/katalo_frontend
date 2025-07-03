export type Shop = {
  logo: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  facebook: string;
  instagram: string;
  hours: string;
  theme: string;
  template?: string; // <-- Ajoute cette ligne
};

export type ShopTheme = { name: string; value: string; color: string };


export type User = {
  avatar: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  theme: string;
};