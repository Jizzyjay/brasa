"use client";

import { CartProvider } from "@/components/CartProvider";
import { MenuFilterProvider } from "@/components/MenuFilter";
import { OverlayProvider } from "@/components/OverlayProvider";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <OverlayProvider>
        <MenuFilterProvider>{children}</MenuFilterProvider>
      </OverlayProvider>
    </CartProvider>
  );
}
