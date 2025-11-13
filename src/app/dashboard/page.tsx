import Image from "next/image";

export default function DashboardPage() {
  const stats = [
    { title: "Agendamentos hoje", value: 8 },
    { title: "Clientes ativos", value: 23 },
    { title: "Serviços cadastrados", value: 6 },
  ];

  return (
    <section className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold mb-1">Resumo geral</h1>
        <p className="text-gray-600">
          Acompanhe seus agendamentos e desempenho.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div
            key={s.title}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center"
          >
            <p className="text-3xl font-bold text-primary">{s.value}</p>
            <p className="text-gray-600">{s.title}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-3">Próximos agendamentos</h2>
          <p className="text-gray-600">
            Veja seus horários confirmados para o dia e prepare-se com
            antecedência.
          </p>
        </div>

        <Image
          src="/dashboard-illustration.png"
          alt="Resumo de agendamentos"
          width={400}
          height={300}
          className="rounded-xl"
        />
      </div>
    </section>
  );
}
