//quando precisar trabalhar diretamente com componentes de icone//

import { LucideIcon } from "lucide-react";

export interface Landing {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  featured: boolean;
  details: string;
}