import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Automacao com WhatsApp",
    description:
      "Confirme agendamentos e envie lembretes automaticamente pelo WhatsApp Business.",
  },
  {
    title: "Agenda para a equipe",
    description:
      "Distribua atendimentos entre colaboradores e visualize a capacidade em tempo real.",
  },
  {
    title: "Financeiro simplificado",
    description:
      "Registre pagamentos, gere recibos e acompanhe metas mensais em um painel unico.",
  },
];

const automations = [
  {
    title: "Captura",
    detail:
      "Clientes preenchem um formulario rapido ou respondem pelo WhatsApp.",
  },
  {
    title: "Confirmacao",
    detail: "O sistema reserva o horario e dispara confirmacoes e lembretes.",
  },
  {
    title: "Seguimento",
    detail: "Envie agradecimentos, novas ofertas e pesquisas de satisfacao.",
  },
];

const testimonials = [
  {
    name: "Claudia Lima",
    role: "Estetica Express",
    quote:
      "Reduzi em 70% o tempo gasto confirmando clientes. ZapGenda cuida de tudo para mim.",
  },
  {
    name: "Studio Orion",
    role: "Barbearia e spa",
    quote:
      "A agenda compartilhada acabou com os conflitos de horario da equipe. Virou padrao na rotina.",
  },
  {
    name: "Diego Martins",
    role: "Consultor independente",
    quote:
      "Os lembretes automatizados aumentaram a taxa de comparecimento e deram um toque profissional.",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col gap-24 py-24 px-6">
      <section className="flex flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          ZapGenda
        </p>
        <h1 className="text-5xl font-bold text-gray-900 max-w-4xl leading-tight mt-4">
          Sua agenda operando no piloto automatico
        </h1>
        <p className="text-lg text-gray-600 mt-6 max-w-2xl">
          Centralize agendamentos, confirmacoes e lembretes no mesmo painel e
          garanta um atendimento rapido em qualquer canal.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-10">
          <Link
            href="/signup"
            className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition"
          >
            Comece gratis
          </Link>
          <Link
            href="/pricing"
            className="border border-gray-300 px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition"
          >
            Ver planos
          </Link>
        </div>

        <div className="mt-16 max-w-5xl w-full">
          <Image
            src="/illustration-dashboard.png"
            alt="Painel ZapGenda"
            width={1200}
            height={800}
            priority
            className="rounded-3xl shadow-lg w-full h-auto"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">
            Beneficios principais
          </p>
          <h2 className="text-3xl font-bold mt-3">
            Tudo que voce precisa para escalar atendimentos
          </h2>
          <p className="text-gray-600 mt-4">
            Substitua planilhas e confirmacoes manuais por automacoes
            configuradas em minutos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-3">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 rounded-3xl p-10 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">
              Operacao
            </p>
            <h2 className="text-3xl font-bold mt-3">
              Fluxo automatizado em 3 etapas
            </h2>
            <p className="text-gray-600 mt-4">
              Escolha quais mensagens enviar, personalize templates e acompanhe
              cada contato pelo painel.
            </p>
          </div>
          <div className="grid gap-4">
            {automations.map((step, index) => (
              <div
                key={step.title}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
              >
                <p className="text-xs font-semibold text-primary uppercase tracking-widest">
                  Etapa {index + 1}
                </p>
                <h3 className="text-lg font-semibold mt-1">{step.title}</h3>
                <p className="text-gray-600 mt-2">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">
            Depoimentos
          </p>
          <h2 className="text-3xl font-bold mt-3">
            Profissionais que ja usam ZapGenda
          </h2>
          <p className="text-gray-600 mt-4">
            Negocios de diferentes segmentos automatizaram suas agendas e nunca
            mais perderam um horario.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <p className="text-gray-700 italic">{testimonial.quote}</p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-white rounded-3xl px-8 py-12 text-center max-w-5xl mx-auto w-full">
        <p className="text-sm font-semibold uppercase tracking-[0.3em]">
          Pronto para comecar?
        </p>
        <h2 className="text-3xl font-bold mt-4">Teste ZapGenda por 14 dias</h2>
        <p className="text-white/70 mt-4 max-w-3xl mx-auto">
          Configure lembretes automatizados, convide sua equipe e acompanhe os
          resultados em um unico painel.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <Link
            href="/signup"
            className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:opacity-90 transition"
          >
            Criar conta
          </Link>
          <Link
            href="/pricing"
            className="border border-white/40 px-8 py-3 rounded-xl font-medium hover:bg-white/10 transition"
          >
            Ver planos
          </Link>
        </div>
      </section>
    </main>
  );
}
