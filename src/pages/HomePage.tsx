import { HubCard } from "@/components/layout";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          DFL Frontend Starter
        </h1>
        <p className="mt-2 text-gray-500">
          Exemplos de padrões de frontend moderno. Escolha um card para explorar.
        </p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <HubCard
          title="CRUD de Produtos"
          to="/exemplo-crud"
          description="Filtros, paginação e dialog ao editar."
        />
        <HubCard
          title="Lista Simples"
          to="/exemplo-lista-simples"
          description="Lista de fornecedores sem paginação."
        />
        <HubCard
          title="Estado Local vs Server State"
          to="/exemplo-estado-local"
          description="useState comparado a React Query."
        />
        <HubCard
          title="Área Restrita"
          to="/area-restrita"
          description="ProtectedRoute + Context de autenticação."
        />
        <HubCard
          title="Landing Page do Projeto"
          badge="Novo"
          to="/landing"
          description="Página com os destaques do projeto da instituição."
        />
      </div>
    </div>
  );
}