type Collaborator = {
  id: number;
  nome: string;
  funcao: string;
  especialidades: string[];
  status: "Disponivel" | "Em atendimento" | "Em pausa" | "Offline";
  ultimaAtividade: string;
  proximosAtendimentos: number;
};

const colaboradores: Collaborator[] = [
  {
    id: 1,
    nome: "Felipe Carvalho",
    funcao: "Barbeiro senior",
    especialidades: ["Corte", "Barba", "Gradiente"],
    status: "Disponivel",
    ultimaAtividade: "Ha 12 min",
    proximosAtendimentos: 3,
  },
  {
    id: 2,
    nome: "Bianca Andrade",
    funcao: "Designer de unhas",
    especialidades: ["Gel", "Spa", "Decoracao"],
    status: "Em atendimento",
    ultimaAtividade: "Atendendo Maria",
    proximosAtendimentos: 2,
  },
  {
    id: 3,
    nome: "Rafael Costa",
    funcao: "Tatuador",
    especialidades: ["Preto e cinza", "Fine line"],
    status: "Em pausa",
    ultimaAtividade: "Retorna as 15h",
    proximosAtendimentos: 1,
  },
  {
    id: 4,
    nome: "Juliana Lima",
    funcao: "Esteticista",
    especialidades: ["Limpeza de pele", "Design sobrancelhas"],
    status: "Disponivel",
    ultimaAtividade: "Livre",
    proximosAtendimentos: 4,
  },
  {
    id: 5,
    nome: "Caio Martins",
    funcao: "Body piercer",
    especialidades: ["Piercing", "Curativos"],
    status: "Offline",
    ultimaAtividade: "Ultimo login ontem",
    proximosAtendimentos: 0,
  },
];

const statusStyles: Record<Collaborator["status"], string> = {
  Disponivel: "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Em atendimento": "bg-sky-50 text-sky-700 border-sky-100",
  "Em pausa": "bg-amber-50 text-amber-700 border-amber-100",
  Offline: "bg-gray-100 text-gray-500 border-gray-200",
};

const stats = [
  { label: "Ativos hoje", value: 4, helper: "+2 vs semana passada" },
  { label: "Atendimentos em andamento", value: 3, helper: "2 agendados agora" },
  { label: "Convites pendentes", value: 1, helper: "Reenvie aos domingos" },
];

export default function ColaboradoresPage() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="uppercase text-xs font-semibold tracking-[0.3em] text-gray-400">
            Equipe
          </p>
          <h1 className="text-2xl font-bold mt-1">Colaboradores</h1>
          <p className="text-gray-600">
            Controle quem realiza os atendimentos e acompanhe disponibilidade em
            tempo real.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button className="border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium hover:border-gray-300 transition">
            Enviar convite
          </button>
          <button className="bg-primary text-white rounded-xl px-4 py-2 text-sm font-semibold hover:opacity-90 transition">
            Novo colaborador
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-1"
          >
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            <span className="text-xs text-gray-500">{stat.helper}</span>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
            <input
              type="search"
              placeholder="Buscar por nome ou funcao"
              className="flex-1 border rounded-xl px-4 py-2 outline-primary"
            />
            <select className="border rounded-xl px-4 py-2 text-sm text-gray-600 outline-primary">
              <option>Status: todos</option>
              <option>Disponiveis</option>
              <option>Em atendimento</option>
              <option>Em pausa</option>
              <option>Offline</option>
            </select>
          </div>

          <div className="flex gap-2 text-xs">
            <span className="px-3 py-1 rounded-full border border-dashed text-gray-500">
              Turno tarde
            </span>
            <span className="px-3 py-1 rounded-full border border-dashed text-gray-500">
              Studio Centro
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="py-3 pr-4 font-medium">Profissional</th>
                <th className="py-3 pr-4 font-medium">Especialidades</th>
                <th className="py-3 pr-4 font-medium">Status</th>
                <th className="py-3 pr-4 font-medium">Ultima atividade</th>
                <th className="py-3 pr-4 font-medium text-right">
                  Proximos atendimentos
                </th>
                <th className="py-3 pl-4 font-medium text-right">Acoes</th>
              </tr>
            </thead>
            <tbody>
              {colaboradores.map((colaborador) => (
                <tr
                  key={colaborador.id}
                  className="border-b last:border-none transition hover:bg-gray-50/70"
                >
                  <td className="py-4 pr-4 align-top">
                    <p className="font-semibold text-gray-900">
                      {colaborador.nome}
                    </p>
                    <p className="text-xs text-gray-500">
                      {colaborador.funcao}
                    </p>
                  </td>
                  <td className="py-4 pr-4 align-top">
                    <div className="flex flex-wrap gap-1">
                      {colaborador.especialidades.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 pr-4 align-top">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${statusStyles[colaborador.status]}`}
                    >
                      {colaborador.status}
                    </span>
                  </td>
                  <td className="py-4 pr-4 align-top text-gray-600">
                    {colaborador.ultimaAtividade}
                  </td>
                  <td className="py-4 pr-4 align-top text-right font-semibold text-gray-900">
                    {colaborador.proximosAtendimentos}
                  </td>
                  <td className="py-4 pl-4 align-top text-right">
                    <button className="text-sm font-semibold text-primary hover:underline">
                      Ver detalhes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Dica: cadastre cada colaborador com seu WhatsApp para enviar lembretes
          automaticos dos atendimentos.
        </p>
      </div>
    </section>
  );
}
