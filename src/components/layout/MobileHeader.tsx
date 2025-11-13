"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, LogOut } from "lucide-react";
import { sidebarItems } from "./Sidebar";

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 flex h-16 items-center justify-end px-4 bg-transparent">
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-800 shadow-sm backdrop-blur transition hover:scale-105"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <div
        className={`md:hidden fixed inset-0 z-30 transition ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        <aside
          className={`relative w-72 max-w-[80%] min-h-[100dvh] bg-white px-6 py-6 shadow-xl transition-transform duration-300 overflow-y-auto box-border ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h2 className="mb-8 text-lg font-semibold text-gray-900">Menu</h2>

          <nav className="flex flex-col gap-1">
            {sidebarItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
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

          <div className="mt-auto border-t pt-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/user-avatar.png"
                alt="Avatar do usuario"
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">Felipe</p>
                <p className="text-xs text-gray-500">Administrador</p>
              </div>
            </div>

            <Link
              href="/login"
              onClick={closeMenu}
              className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition-colors"
            >
              <LogOut size={15} />
              Sair
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
