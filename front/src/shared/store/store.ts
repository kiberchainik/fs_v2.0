import { IUserMenuHeaderData } from "@/features/userHeaderBtn/types/userMenuData.type";
import { Store } from "@tanstack/react-store"

export const store = new Store({
    state: { user: undefined } as { user: IUserMenuHeaderData | undefined },
  });