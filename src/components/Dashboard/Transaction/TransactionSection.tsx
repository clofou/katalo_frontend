import { useState } from "react";
import { TransactionsTable } from "./TransactionsTable";
import { TransactionDetailsModal } from "./TransactionDetailsModal";
import { CreditCard, CheckCircle2, Clock, XCircle } from "lucide-react";
import type { PaymentCard, Transaction, PaymentMethodType } from "./type";
import { PaymentCard3D } from "./PaymentCard3D";

const kpis = [
	{
		label: "Total Revenue",
		value: "$120,000",
		icon: <CreditCard className="text-[#f6a623]" size={28} />,
		bg: "bg-[#f6a623]/10",
	},
	{
		label: "Completed",
		value: "1,250",
		icon: <CheckCircle2 className="text-green-500" size={28} />,
		bg: "bg-green-100 dark:bg-green-900/30",
	},
	{
		label: "Pending",
		value: "120",
		icon: <Clock className="text-yellow-500" size={28} />,
		bg: "bg-yellow-100 dark:bg-yellow-900/30",
	},
	{
		label: "Failed",
		value: "30",
		icon: <XCircle className="text-red-500" size={28} />,
		bg: "bg-red-100 dark:bg-red-900/30",
	},
];

// Exemple à placer en haut de TransactionSection.tsx ou dans un fichier séparé
const names = [
	"Alice Martin",
	"John Doe",
	"Fatou Ndiaye",
	"Paul Dupont",
	"Sophie Leroy",
	"Noman Manzoor",
	"Jane Smith",
	"Alioune Sarr",
	"Emily Davis",
	"Lucas Moreau",
];
const methods: PaymentMethodType[] = [
	"CC",
	"PayPal",
	"Bank",
	"Orange Money",
	"Mobicash",
	"Sama Money",
];
const statuses = [
	{ label: "Complete", color: "text-orange-500", dot: "bg-orange-400" },
	{ label: "Pending", color: "text-yellow-500", dot: "bg-yellow-400" },
	{ label: "Canceled", color: "text-red-500", dot: "bg-red-400" },
];
const products = [
	{
		id: "P1",
		name: "iPhone 15",
		img: "/assets/products/iphone15.png",
		price: "$1200",
		quantity: 1,
	},
	{
		id: "P2",
		name: "T-shirt",
		img: "/assets/products/tshirt.png",
		price: "$25",
		quantity: 2,
	},
	{
		id: "P3",
		name: "Wallet",
		img: "/assets/products/wallet.png",
		price: "$40",
		quantity: 1,
	},
	{
		id: "P4",
		name: "Headphones",
		img: "/assets/products/headphones.png",
		price: "$80",
		quantity: 1,
	},
	{
		id: "P5",
		name: "Sneakers",
		img: "/assets/products/sneakers.png",
		price: "$150",
		quantity: 1,
	},
];

function randomCard(name: string, method: PaymentMethodType): PaymentCard {
	const numbers = [
		"**** **** **** 2345",
		"**** **** **** 9876",
		"**** **** **** 1111",
		"OM-002-9981",
		"MC-001-1234",
		"SM-001-4321",
		"PP-001-5678",
	];
	return {
		bank: method,
		number: numbers[Math.floor(Math.random() * numbers.length)],
		holder: name,
		expiry:
			method === "CC" || method === "Bank"
				? "0" + (Math.floor(Math.random() * 9) + 1) + "/2" + (Math.floor(Math.random() * 5) + 6)
				: "",
		status: "Active",
		transactions: Math.floor(Math.random() * 1000) + 1,
		revenue: "$" + (Math.floor(Math.random() * 10000) + 1000),
		type: method,
		cvv: "***",
	};
}

const transactions: Transaction[] = Array.from({ length: 100 }, (_, i) => {
	const name = names[Math.floor(Math.random() * names.length)];
	const method = methods[Math.floor(Math.random() * methods.length)];
	const status = statuses[Math.floor(Math.random() * statuses.length)];
	const prods = [
		products[Math.floor(Math.random() * products.length)],
		...(Math.random() > 0.5 ? [products[Math.floor(Math.random() * products.length)]] : []),
	];
	return {
		id: "#TRX" + String(i + 1).padStart(4, "0"),
		orderId: "#ORD" + String(i + 1).padStart(4, "0"),
		name,
		date: `2025-0${(i % 9) + 1}-1${i % 9}`,
		total: "$" + (100 + (i % 20) * 10 + (i % 5) * 5).toLocaleString(),
		method,
		status,
		card: ["CC", "Bank", "Orange Money", "Mobicash", "Sama Money", "PayPal"].includes(method)
			? randomCard(name, method)
			: undefined,
		products: prods,
	};
});

export function TransactionSection() {
	const [selectedTransaction, setSelectedTransaction] = useState<Transaction | undefined>(undefined);
	const [deactivatedCards, setDeactivatedCards] = useState<PaymentCard[]>([]);

	// Désactiver une carte
	const handleDeactivateCard = (card: PaymentCard) => {
		setDeactivatedCards((prev) =>
			prev.some((c) => c.number === card.number && c.holder === card.holder)
				? prev
				: [...prev, { ...card, status: "Inactive" }]
		);
	};

	// Réactiver une carte
	const handleReactivateCard = (card: PaymentCard) => {
		setDeactivatedCards((prev) =>
			prev.filter((c) => !(c.number === card.number && c.holder === card.holder))
		);
	};

	return (
		<div className="flex flex-col gap-8">
			{/* KPI Cards (2x2) */}
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
				{kpis.map((kpi) => (
					<div
						key={kpi.label}
						className={`flex items-center gap-4 rounded-xl p-4 shadow-sm border bg-white dark:bg-[#18181b] ${kpi.bg}`}
					>
						<div className="p-2 rounded-lg bg-white dark:bg-[#232c3b] shadow">
							{kpi.icon}
						</div>
						<div>
							<div className="text-xs text-gray-500 dark:text-gray-400">
								{kpi.label}
							</div>
							<div className="text-xl font-bold text-gray-800 dark:text-white">
								{kpi.value}
							</div>
						</div>
					</div>
				))}
			</div>
			{/* Table Transactions */}
			<div>
				<TransactionsTable
					transactions={transactions}
					onSelectTransaction={setSelectedTransaction}
				/>
			</div>
			{/* Modal transaction details */}
			<TransactionDetailsModal
				open={!!selectedTransaction}
				onClose={() => setSelectedTransaction(undefined)}
				transaction={selectedTransaction}
				onDeactivateCard={selectedTransaction?.card ? handleDeactivateCard : undefined}
			/>
			{/* Cartes désactivées */}
			{deactivatedCards.length > 0 && (
				<div className="bg-white dark:bg-[#18181b] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-4 mt-4">
					<div className="font-bold mb-2 text-red-600 dark:text-red-400">Cartes désactivées</div>
					<div className="flex flex-wrap gap-4">
						{deactivatedCards.map((card, idx) => (
							<div
								key={card.number + card.holder + idx}
								className="   w-80 flex flex-col gap-2 items-center"
							>
								{/* Utilise PaymentCard3D pour l'affichage */}
								<PaymentCard3D card={card} />
								<button
									className="mt-2 text-xs text-green-600 font-semibold hover:underline"
									onClick={() => handleReactivateCard(card)}
								>
									Réactiver
								</button>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
