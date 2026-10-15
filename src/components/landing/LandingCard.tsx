import { useState } from "react"; 
import { Landing } from "@/types/landing.types";

interface LandingCardProps {
  item: Landing;
}

export default function LandingCard({ item }: LandingCardProps) {
  const Icon = item.icon;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 text-white transition group-hover:scale-110">
          <Icon className="h-6 w-6" />
        </div>

        {item.featured && (
          <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-800 dark:bg-teal-900 dark:text-teal-300">
            Destaque
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
      <p className="mt-1 text-sm text-gray-500">{item.description}</p>

      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-sm font-medium text-teal-700 hover:underline dark:text-teal-400"
      >
        {isExpanded ? "Ver menos" : "Quero saber mais"}
      </button>

      {isExpanded && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.details}</p>
      )}
    </div>
  );
}