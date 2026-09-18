"use client";

import { createContext, use, useMemo, useState, type ReactNode } from "react";

type MenuFilterContextValue = {
  categoryId: string | null;
  setCategoryId: (id: string | null) => void;
};

const MenuFilterContext = createContext<MenuFilterContextValue | null>(null);

export function MenuFilterProvider({ children }: { children: ReactNode }) {
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const value = useMemo(
    () => ({ categoryId, setCategoryId }),
    [categoryId],
  );
  return <MenuFilterContext value={value}>{children}</MenuFilterContext>;
}

export function useMenuFilter() {
  const context = use(MenuFilterContext);
  if (!context) {
    throw new Error("useMenuFilter must be used within MenuFilterProvider");
  }
  return context;
}
