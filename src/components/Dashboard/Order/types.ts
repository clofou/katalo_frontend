import type { ReactNode } from "react";

export type OrderProduct = {
  name: string;
  img: string;
  quantity: number;
  unitPrice: number;
};

type OrderStatus = {
  label: string;
  color: string;
  icon: ReactNode;
};

export type Order = {
  no: number;
  id: string;
  products: OrderProduct[];
  date: string;
  payment: "Paid" | "Unpaid";
  status: OrderStatus;
};