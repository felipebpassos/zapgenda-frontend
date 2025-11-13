import Link from "next/link";

export default function PricingPage() {
  return (
    <section className="py-24 px-6 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-12">Escolha o plano ideal</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
        {/* Plano gratuito */}
        <div className="border rounded-2xl p-8 bg-white shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-bold mb-4">Gratuito</h3>
          <p className="text-gray-600 mb-6">Ideal para começar</p>
          <ul className="text-gray-700 text-left mb-8">
            <li>• Até 50 clientes</li>
            <li>• 100 agendamentos/mês</li>
            <li>• Lembretes por e-mail</li>
          </ul>
          <Link
            href="/signup?plan=free"
            className="block w-full bg-gray-100 text-gray-800 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
          >
            Começar grátis
          </Link>
        </div>

        {/* Plano Premium */}
        <div className="border-2 border-primary rounded-2xl p-8 bg-white shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-primary">Premium</h3>
          <p className="text-gray-600 mb-6">Tudo ilimitado + WhatsApp</p>
          <ul className="text-gray-700 text-left mb-8">
            <li>• Clientes e agendamentos ilimitados</li>
            <li>• Integração com WhatsApp Business</li>
            <li>• Lembretes automáticos</li>
            <li>• Suporte prioritário</li>
          </ul>
          <Link
            href="/signup?plan=premium"
            className="block w-full bg-primary text-white py-3 rounded-xl font-bold hover:opacity-90 transition"
          >
            Escolher Premium
          </Link>
        </div>
      </div>
    </section>
  );
}
