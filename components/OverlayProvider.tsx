"use client";

import {
  createContext,
  use,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type OverlayContextValue = {
  searchOpen: boolean;
  menuOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
};

const OverlayContext = createContext<OverlayContextValue | null>(null);

export function OverlayProvider({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const value = useMemo<OverlayContextValue>(
    () => ({
      searchOpen,
      menuOpen,
      openSearch: () => {
        setMenuOpen(false);
        setSearchOpen(true);
      },
      closeSearch: () => setSearchOpen(false),
      openMenu: () => {
        setSearchOpen(false);
        setMenuOpen(true);
      },
      closeMenu: () => setMenuOpen(false),
      toggleMenu: () => {
        setSearchOpen(false);
        setMenuOpen((open) => !open);
      },
    }),
    [menuOpen, searchOpen],
  );

  return <OverlayContext value={value}>{children}</OverlayContext>;
}

export function useOverlay() {
  const context = use(OverlayContext);
  if (!context) {
    throw new Error("useOverlay must be used within OverlayProvider");
  }
  return context;
}
