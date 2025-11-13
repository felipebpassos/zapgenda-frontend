"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  Users,
  Wrench,
  History,
  LayoutDashboard,
  LogOut,
  UserCog,
} from "lucide-react";

type SidebarItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const sidebarItems: SidebarItem[] = [
  { href: "/in", label: "Resumo", icon: LayoutDashboard },
  { href: "/in/agenda", label: "Agenda", icon: CalendarDays },
  { href: "/in/clientes", label: "Clientes", icon: Users },
  { href: "/in/colaboradores", label: "Colaboradores", icon: UserCog },
  { href: "/in/servicos", label: "Servicos", icon: Wrench },
  { href: "/in/agendamentos", label: "Historico", icon: History },
  { href: "/login", label: "Sair", icon: LogOut },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:w-64 bg-white shadow-md px-6 py-6 md:h-[100dvh] md:min-h-[100dvh] box-border">
      <div className="flex w-full h-full flex-col">
        <div className="flex flex-col flex-1">
          <nav className="flex flex-col gap-1">
            {sidebarItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  pathname === href
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t pt-4 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/user-avatar.png"
              alt="Avatar do usuario"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex flex-col leading-tight">
              <p className="m-0 text-sm font-semibold text-gray-900">Felipe</p>
              <Link
                href="/in/configuracoes"
                className="m-0 text-xs font-medium text-primary hover:underline"
              >
                Editar perfil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
