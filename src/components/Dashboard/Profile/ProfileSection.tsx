import { useState } from "react";
import { ShopSummaryCard } from "./ShopSummaryCard";
import { UserProfileCard } from "./UserProfileCard";
import { ShopProfileCard } from "./ShopProfileCard";

const SHOP_THEMES = [
	{ name: "Classique", value: "classic", color: "#f6a623" },
	{ name: "Noir", value: "dark", color: "#232c3b" },
	{ name: "Vert", value: "green", color: "#10b981" },
	{ name: "Bleu", value: "blue", color: "#2563eb" },
	{ name: "Rose", value: "pink", color: "#ec4899" },
];

export function ProfileSection() {
		const [user, setUser] = useState({
			avatar: "/assets/avatar-default.png",
			name: "Fatou Ndiaye",
			email: "fatou.ndiaye@email.com",
			phone: "+221 77 123 45 67",
			password: "",
			theme: "light",
		});
		const [shop, setShop] = useState({
			logo: "/assets/shop-default.png",
			name: "Boutique Fatou",
			description: "Boutique de mode et accessoires à Dakar.",
			address: "123 Rue de la Mode, Dakar",
			phone: "+221 77 987 65 43",
			email: "contact@boutiquefatou.sn",
			website: "https://boutiquefatou.sn",
			facebook: "https://facebook.com/boutiquefatou",
			instagram: "https://instagram.com/boutiquefatou",
			hours: "Lun-Sam 9h-19h",
			theme: "classic",
		});

	return (
		<div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
			<div className="flex-1 flex flex-col gap-8">
				<UserProfileCard user={user} setUser={setUser} />
				<ShopProfileCard shop={shop} setShop={setShop} themes={SHOP_THEMES} />
			</div>
			<aside className="hidden lg:flex flex-col gap-8 w-80">
				<ShopSummaryCard shop={shop} themes={SHOP_THEMES} setShop={setShop} />
			</aside>
		</div>
	);
}