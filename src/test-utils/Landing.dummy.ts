import { Landing } from "@/types/landing.types";
import { CalendarClock, Recycle, MapPin } from "lucide-react";

export const landingData: Landing[] = [
  {
    id: "1",
    title: "Agenda por bairro",
    description: "Receba um lembrete no dia certo da coleta seletiva da sua rua.",
    icon: CalendarClock,
    featured: true,
    details: "Cadastre seu CEP e avisamos na véspera da coleta, por notificação ou e-mail",
  },
  {
    id: "2",
    title: "Guia de descarte",
    description: "Descubra em qual lixeira vai cada material.",
    icon: Recycle,
    featured: false,
    details: "Busque por material plástico, vidro, papel, orgânico e veja a cor da lixeira certa",
  },
  {
    id: "3",
    title: "Pontos de coleta especial",
    description: "Encontre onde descartar pilha, óleo e eletrônico perto de você.",
    icon: MapPin,
    featured: false,
    details: "Mapa com endereço e horário dos ecopontos mais próximos, atualizado pelo Orgão responsável",
  },
];