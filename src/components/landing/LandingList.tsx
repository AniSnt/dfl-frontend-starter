import { Landing } from "@/types/landing.types";
import LandingCard from "./LandingCard";

interface LandingListProps {
  items: Landing[];
  onToggleFeatured: (item: Landing) => void;
  onDelete: (id: string) => void;
  isBusy?: boolean;
}

export default function LandingList({ items, onToggleFeatured, onDelete, isBusy }: LandingListProps) {
  if (items.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-gray-500">Nenhum destaque encontrado</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
      {items.map((item) => (
        <LandingCard
          key={item.id}
          item={item}
          onToggleFeatured={onToggleFeatured}
          onDelete={onDelete}
          isBusy={isBusy}
        />
      ))}
    </div>
  );
}