import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon, Upload, Save, Edit2 } from "lucide-react";
import type { User } from "./type";
import { useTheme } from "@/context/ThemeContext";

export function UserProfileCard({
  user,
  setUser,
}: {
  user: User;
  setUser: (fn: (u: User) => User) => void;
}) {
  const [editUser, setEditUser] = useState(false);
  const { toggleTheme } = useTheme();

  const toggleTheme1 = () =>{

    const newTheme = user.theme === "dark" ? "light" : "dark";
  toggleTheme(); // Bascule le thème global (contexte)
  setUser((u) => ({
    ...u,
    theme: newTheme,
  }));
  }


    


  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUser((u) => ({
        ...u,
        avatar: URL.createObjectURL(file),
      }));
    }
  };

  return (
    <section className="bg-white dark:bg-[#18181b] rounded-xl shadow border border-gray-100 dark:border-[#232c3b] p-0 overflow-hidden">
      <div className="border-b border-gray-100 dark:border-[#232c3b] px-8 py-5 flex items-center gap-4 bg-gray-50 dark:bg-[#222]">
        <Sun className="text-[#f6a623]" size={24} />
        <h2 className="text-lg font-bold text-gray-800 dark:text-white tracking-wide">
          Mon profil
        </h2>
      </div>
      <div className="p-8 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <div className="relative">
            <img
              src={user.avatar}
              alt="avatar"
              className="w-24 h-24 rounded-full border-2 border-gray-200 dark:border-[#232c3b] object-cover shadow"
            />
            <label className="absolute bottom-0 right-0 bg-gray-200 dark:bg-[#232c3b] p-2 rounded-full cursor-pointer shadow border border-white">
              <Upload size={16} className="text-[#f6a623]" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </label>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                {user.name}
              </span>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setEditUser((v) => !v)}
                aria-label="Editer profil"
              >
                <Edit2 size={16} />
              </Button>
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              {user.email}
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              {user.phone}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-gray-400">
                Thème dashboard
              </span>
              <Switch
                checked={user.theme === "dark"}
                onCheckedChange={toggleTheme1}
              />
              {user.theme === "dark" ? (
                <Moon size={14} />
              ) : (
                <Sun size={14} />
              )}
            </div>
          </div>
        </div>
        {editUser && (
          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              setEditUser(false);
            }}
          >
            <label>
              <span className="block text-xs text-gray-500 mb-1">
                Nom
              </span>
              <Input
                value={user.name}
                onChange={(e) =>
                  setUser((u) => ({ ...u, name: e.target.value }))
                }
              />
            </label>
            <label>
              <span className="block text-xs text-gray-500 mb-1">
                Email
              </span>
              <Input
                value={user.email}
                onChange={(e) =>
                  setUser((u) => ({ ...u, email: e.target.value }))
                }
              />
            </label>
            <label>
              <span className="block text-xs text-gray-500 mb-1">
                Téléphone
              </span>
              <Input
                value={user.phone}
                onChange={(e) =>
                  setUser((u) => ({ ...u, phone: e.target.value }))
                }
              />
            </label>
            <label>
              <span className="block text-xs text-gray-500 mb-1">
                Mot de passe
              </span>
              <Input
                type="password"
                value={user.password}
                onChange={(e) =>
                  setUser((u) => ({ ...u, password: e.target.value }))
                }
                placeholder="Nouveau mot de passe"
              />
            </label>
            <div className="col-span-2 flex justify-end gap-2">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setEditUser(false)}
              >
                Annuler
              </Button>
              <Button type="submit" variant="default">
                <Save size={14} className="mr-2" />
                Sauvegarder
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}