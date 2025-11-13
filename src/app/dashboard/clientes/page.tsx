export default function ClientesPage() {
  const clientes = [
    { nome: "João Pereira", telefone: "(79) 99999-9999" },
    { nome: "Maria Alves", telefone: "(79) 98888-8888" },
  ];

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Clientes</h1>

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-2">Nome</th>
              <th className="py-2">Telefone</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((c) => (
              <tr key={c.nome} className="border-b last:border-none">
                <td className="py-3">{c.nome}</td>
                <td className="py-3 text-gray-600">{c.telefone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
