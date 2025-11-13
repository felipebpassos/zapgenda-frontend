"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  const params = useSearchParams();
  const plan = params.get("plan") || "free";

  const planName =
    plan === "premium" ? "Plano Premium (R$ 49/mês)" : "Plano Gratuito";

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-16 py-24 px-6">
      {/* Lado esquerdo - Ilustração */}
      <div className="hidden md:flex max-w-sm">
        <Image
          src="/signup-illustration.png"
          alt="Ilustração de cadastro ZapGenda"
          width={500}
          height={500}
          className="rounded-2xl object-cover"
        />
      </div>

      {/* Lado direito - Formulário */}
      <div className="bg-white p-10 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">
          Criar conta no ZapGenda
        </h2>
        <p className="text-sm text-center text-gray-600 mb-8">{planName}</p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome completo"
            className="border rounded-lg px-4 py-3 outline-primary"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="border rounded-lg px-4 py-3 outline-primary"
          />
          <input
            type="password"
            placeholder="Senha"
            className="border rounded-lg px-4 py-3 outline-primary"
          />

          <button
            type="submit"
            className="bg-primary text-white py-3 rounded-xl font-bold hover:opacity-90 transition cursor-pointer"
          >
            Criar conta
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Já tem conta?{" "}
          <Link href="/login" className="text-primary font-medium">
            Entrar
          </Link>
        </p>
      </div>
    </section>
  );
}
