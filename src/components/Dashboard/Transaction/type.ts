export type PaymentMethodType = "CC" | "PayPal" | "Bank" | "Orange Money" | "Mobicash" | "Sama Money";

export type Product = {
  id: string;
  name: string;
  img: string;
  price: string;
  quantity: number;
};

export type Transaction = {
  id: string;
  orderId: string;
  name: string;
  date: string;
  total: string;
  method: PaymentMethodType;
  status: { label: string; color: string; dot: string };
  card?: PaymentCard;
  products: Product[];
};

export type PaymentCard = {
  cvv: string;
  bank: string;
  number: string;
  holder: string;
  expiry: string;
  status: "Active" | "Inactive";
  transactions: number;
  revenue: string;
  type: PaymentMethodType;
};