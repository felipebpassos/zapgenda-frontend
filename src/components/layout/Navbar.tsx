"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [{ href: "/login", label: "Entrar" }];

  return (
    <nav className="h-16 bg-white shadow-md flex items-center justify-between px-8">
      <Link href="/" className="text-2xl font-bold text-primary">
        ZapGenda
      </Link>

      <div className="flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-primary transition-colors ${
              pathname === link.href
                ? "text-primary font-semibold"
                : "text-gray-700"
            }`}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/pricing"
          className="bg-primary text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
        >
          Comece grátis
        </Link>
      </div>
    </nav>
  );
}
