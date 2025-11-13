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
  Settings,
  LayoutDashboard,
  LogOut,
} from "lucide-react";

type SidebarItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const sidebarItems: SidebarItem[] = [
  { href: "/dashboard", label: "Resumo", icon: LayoutDashboard },
  { href: "/dashboard/agenda", label: "Agenda", icon: CalendarDays },
  { href: "/dashboard/clientes", label: "Clientes", icon: Users },
  { href: "/dashboard/servicos", label: "Servicos", icon: Wrench },
  { href: "/dashboard/agendamentos", label: "Historico", icon: History },
  { href: "/dashboard/configuracoes", label: "Configuracoes", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:w-64 bg-white shadow-md px-6 py-6 md:h-[100dvh] md:min-h-[100dvh] box-border">
      <div className="flex w-full h-full flex-col">
        <div className="flex flex-col flex-1">
          <h1 className="text-2xl font-bold text-primary mb-8">ZapGenda</h1>

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
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-900">Felipe</p>
              <p className="text-xs text-gray-500">Administrador</p>
            </div>
          </div>

          <Link
            href="/login"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition-colors"
          >
            <LogOut size={16} />
            Sair
          </Link>
        </div>
      </div>
    </aside>
  );
}
