"use client";

import {
  createContext,
  use,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, Dish } from "@/lib/types";

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  announcement: string;
  addItem: (dish: Dish) => void;
  setQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    return {
      items,
      count,
      subtotal,
      isOpen,
      announcement,
      addItem: (dish) => {
        setItems((current) => {
          const existing = current.find((item) => item.id === dish.id);
          if (existing) {
            return current.map((item) =>
              item.id === dish.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            );
          }
          return [
            ...current,
            {
              id: dish.id,
              name: dish.name,
              price: dish.price,
              image: dish.image,
              quantity: 1,
            },
          ];
        });
        setAnnouncement(`${dish.name} added to bag`);
      },
      setQuantity: (id, quantity) => {
        setItems((current) =>
          quantity <= 0
            ? current.filter((item) => item.id !== id)
            : current.map((item) =>
                item.id === id ? { ...item, quantity } : item,
              ),
        );
      },
      removeItem: (id) => {
        setItems((current) => current.filter((item) => item.id !== id));
      },
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((open) => !open),
    };
  }, [announcement, isOpen, items]);

  return <CartContext value={value}>{children}</CartContext>;
}

export function useCart() {
  const context = use(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
