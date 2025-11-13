"use client";

import { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <section className="flex flex-col items-center justify-center py-24 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8">
          Entrar no ZapGenda
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
            Entrar
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Não tem uma conta?{" "}
          <Link href="/signup" className="text-primary font-medium">
            Cadastrar
          </Link>
        </p>
      </div>
    </section>
  );
}
