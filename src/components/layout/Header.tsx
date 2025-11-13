import Image from "next/image";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-700">Painel</h2>

      <div className="flex items-center gap-3">
        <Image
          src="/user-avatar.png"
          alt="Usuário"
          width={36}
          height={36}
          className="rounded-full"
        />
        <span className="text-sm text-gray-600">
          Olá, <strong>Felipe</strong>
        </span>
      </div>
    </header>
  );
}
