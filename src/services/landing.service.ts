import { Leaf } from "lucide-react";
import { SIMULATED_API_DELAY_MS } from "@/constants/app.constants";
import { landingData } from "@/test-utils/Landing.dummy";
import type { CreateLandingDto, Landing, UpdateLandingDto } from "@/types";

const delay = () => new Promise((resolve) => setTimeout(resolve, SIMULATED_API_DELAY_MS));

// O formulário não escolhe ícone (é um componente do lucide), então itens novos usam este.
const DEFAULT_ICON = Leaf;

export async function getLandingItems(): Promise<Landing[]> {
  await delay();
  return [...landingData];
}

export async function createLandingItem(dto: CreateLandingDto): Promise<Landing> {
  await delay();
  const item: Landing = {
    id: String(Date.now()),
    title: dto.title,
    description: dto.description,
    details: dto.details,
    featured: dto.featured,
    icon: DEFAULT_ICON,
  };
  landingData.unshift(item);
  return { ...item };
}

export async function updateLandingItem(id: string, dto: UpdateLandingDto): Promise<Landing> {
  await delay();
  const index = landingData.findIndex((item) => item.id === id);
  if (index === -1) throw new Error(`Item ${id} não encontrado`);

  landingData[index] = { ...landingData[index], ...dto };
  return { ...landingData[index] };
}

export async function deleteLandingItem(id: string): Promise<void> {
  await delay();
  const index = landingData.findIndex((item) => item.id === id);
  if (index === -1) throw new Error(`Item ${id} não encontrado`);
  landingData.splice(index, 1);
}