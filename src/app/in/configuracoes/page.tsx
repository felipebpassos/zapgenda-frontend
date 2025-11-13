export default function ConfiguracoesPage() {
  return (
    <section className="max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Configurações</h1>

      <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-700">Nome</span>
          <input
            type="text"
            className="border rounded-lg px-4 py-2 outline-primary"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-700">E-mail</span>
          <input
            type="email"
            className="border rounded-lg px-4 py-2 outline-primary"
          />
        </label>

        <button className="bg-primary text-white py-2 rounded-lg font-medium hover:opacity-90 transition mt-4">
          Salvar alterações
        </button>
      </div>
    </section>
  );
}
