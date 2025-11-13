import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Página não encontrada — ZapGenda",
};

export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6">
      <div className="w-64 h-64 relative mb-8">
        <Image
          src="/404-illustration.png"
          alt="Página não encontrada"
          fill
          className="object-contain"
          priority
        />
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Página não encontrada
      </h1>
      <p className="text-gray-600 max-w-md mb-10">
        Opa! Parece que o link que você tentou acessar não existe ou foi movido.
        Mas não se preocupe — você pode voltar ao início e continuar com sua
        agenda.
      </p>

      <Link
        href="/"
        className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition"
      >
        Voltar ao início
      </Link>
    </section>
  );
}
