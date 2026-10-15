import LandingList from "@/components/landing/LandingList";
import { Button } from "@/components/ui";
import { landingData } from "@/test-utils/Landing.dummy";
import { Landing } from "@/types/landing.types";
import { ArrowLeftIcon, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const delay = () => new Promise((resolve) => setTimeout(resolve, 3000));

export default function LandingPage() {
  const [items, setItems] = useState<Landing[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadItems = async () => {
    try {
      setIsLoading(true);
      await delay();
      setItems([...landingData]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadItems();
  }, []);

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

      {isLoading ? (
        <div className="flex h-full items-center justify-center gap-1">
          <Loader2 className="h-4 w-4 animate-spin" />
          <p className="text-gray-500">Carregando...</p>
        </div>
      ) : (
        <LandingList items={items} />
      )}
    </main>
  );
}