export default function ServicosPage() {
  const servicos = [
    { nome: "Corte de cabelo", duracao: "30 min", preco: "R$ 50" },
    { nome: "Tatuagem pequena", duracao: "1h", preco: "R$ 200" },
  ];

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Serviços</h1>

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-2">Serviço</th>
              <th className="py-2">Duração</th>
              <th className="py-2">Preço</th>
            </tr>
          </thead>
          <tbody>
            {servicos.map((s) => (
              <tr key={s.nome} className="border-b last:border-none">
                <td className="py-3">{s.nome}</td>
                <td className="py-3 text-gray-600">{s.duracao}</td>
                <td className="py-3 text-gray-600">{s.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
