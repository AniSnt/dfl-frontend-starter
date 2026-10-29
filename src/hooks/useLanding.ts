import { useCallback, useEffect, useState } from "react";
import {
  createLandingItem,
  deleteLandingItem,
  getLandingItems,
  updateLandingItem,
} from "@/services/landing.service";
import type { CreateLandingDto, Landing, UpdateLandingDto } from "@/types";

export function useLanding() {
  const [items, setItems] = useState<Landing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMutating, setIsMutating] = useState(false);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getLandingItems();
      setItems(data);
    } catch {
      setError("Falha ao carregar os itens.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const create = async (dto: CreateLandingDto) => {
    setIsMutating(true);
    try {
      await createLandingItem(dto);
      await load();
    } finally {
      setIsMutating(false);
    }
  };

  const update = async (id: string, dto: UpdateLandingDto) => {
    setIsMutating(true);
    try {
      await updateLandingItem(id, dto);
      await load();
    } finally {
      setIsMutating(false);
    }
  };

  const remove = async (id: string) => {
    setIsMutating(true);
    try {
      await deleteLandingItem(id);
      await load();
    } finally {
      setIsMutating(false);
    }
  };

  return { items, isLoading, error, isMutating, create, update, remove, reload: load };
}