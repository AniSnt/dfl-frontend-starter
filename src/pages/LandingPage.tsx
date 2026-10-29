import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import LandingList from "@/components/landing/LandingList";
import { Button, ErrorState, Input, LoadingState } from "@/components/ui";
import { useLanding } from "@/hooks/useLanding";
import type { CreateLandingDto, Landing } from "@/types";

const emptyForm: CreateLandingDto = {
  title: "",
  description: "",
  details: "",
  featured: false,
};

export default function LandingPage() {
  const { items, isLoading, error, isMutating, create, update, remove, reload } = useLanding();
  const [form, setForm] = useState<CreateLandingDto>(emptyForm);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    await create(form);
    setForm(emptyForm);
  };

  const handleToggleFeatured = async (item: Landing) => {
    await update(item.id, { featured: !item.featured });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Excluir este item?")) return;
    await remove(id);
  };

  return (
    <main className="space-y-8 rounded-3xl bg-gradient-to-b from-green-50 via-lime-300 to-[#39FF14] p-6">
      <section className="rounded-2xl bg-gradient-to-r from-emerald-600 to-green-700 px-6 py-16 text-center text-white">
        <h1 className="text-4xl font-extrabold sm:text-5xl">Recicla+</h1>
        <p className="mx-auto mt-4 max-w-xl text-emerald-100">
          Recicle certo, sem complicação: agenda e guia num só lugar.
        </p>

        <Link to="/" className="mt-6 inline-block">
          <Button variant="neutral" className="gap-2">
            <ArrowLeftIcon className="h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </section>

      <form
        onSubmit={handleSubmit}
        className="space-y-3 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900"
      >
        <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Adicionar item</h2>

        <div>
          <label htmlFor="landing-title" className="mb-1 block text-sm text-gray-700 dark:text-gray-300">
            Título
          </label>
          <Input
            id="landing-title"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Ex.: Troca de recicláveis"
          />
        </div>

        <div>
          <label htmlFor="landing-description" className="mb-1 block text-sm text-gray-700 dark:text-gray-300">
            Descrição
          </label>
          <Input
            id="landing-description"
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Uma frase curta sobre o item"
          />
        </div>

        <div>
          <label htmlFor="landing-details" className="mb-1 block text-sm text-gray-700 dark:text-gray-300">
            Detalhes
          </label>
          <Input
            id="landing-details"
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
            placeholder="Aparece ao clicar em “Quero saber mais”"
          />
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) => setForm({ ...form, featured: e.target.checked })}
          />
          Marcar como destaque
        </label>

        <Button type="submit" disabled={isMutating}>
          {isMutating ? "Salvando..." : "Adicionar"}
        </Button>
      </form>

      {isLoading && <LoadingState message="Carregando..." />}
      {error && <ErrorState message={error} onRetry={() => void reload()} />}
      {!isLoading && !error && (
        <LandingList
          items={items}
          onToggleFeatured={handleToggleFeatured}
          onDelete={handleDelete}
          isBusy={isMutating}
        />
      )}
    </main>
  );
}