export default function AgendamentosPage() {
  const agendamentos = [
    { cliente: "João Pereira", servico: "Corte", data: "12/11/2025 14:00" },
    { cliente: "Maria Alves", servico: "Tatuagem", data: "13/11/2025 10:30" },
  ];

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Histórico de agendamentos</h1>

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-2">Cliente</th>
              <th className="py-2">Serviço</th>
              <th className="py-2">Data</th>
            </tr>
          </thead>
          <tbody>
            {agendamentos.map((a) => (
              <tr
                key={a.cliente + a.data}
                className="border-b last:border-none"
              >
                <td className="py-3">{a.cliente}</td>
                <td className="py-3 text-gray-600">{a.servico}</td>
                <td className="py-3 text-gray-600">{a.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
