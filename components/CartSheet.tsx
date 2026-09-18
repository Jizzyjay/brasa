"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCart } from "@/components/CartProvider";
import { Button } from "@/components/Button";
import { springFlick } from "@/lib/motion";
import { formatNaira } from "@/lib/utils";

export function CartSheet() {
  const {
    items,
    subtotal,
    isOpen,
    closeCart,
    setQuantity,
    removeItem,
    announcement,
  } = useCart();
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const [canDrag, setCanDrag] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setCanDrag(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    lastFocus.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
      lastFocus.current?.focus();
    };
  }, [closeCart, isOpen]);

  return (
    <>
      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-char/45"
              aria-label="Close bag"
              onClick={closeCart}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-labelledby="cart-title"
              className="absolute inset-x-0 bottom-0 flex max-h-[88dvh] flex-col rounded-t-[2rem] bg-white shadow-lift md:inset-auto md:top-3 md:right-3 md:bottom-3 md:h-auto md:w-[min(100%,420px)] md:rounded-[1.75rem]"
              initial={reduce ? false : { y: 40, x: 0, opacity: 0 }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { y: 32, opacity: 0 }}
              transition={reduce ? { duration: 0.15 } : springFlick}
              drag={reduce || !canDrag ? false : "y"}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.y > 120 || info.velocity.y > 700) {
                  closeCart();
                }
              }}
            >
              <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-mist md:hidden" />
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="size-5" strokeWidth={1.5} />
                  <h2 id="cart-title" className="font-display text-xl font-semibold">
                    Your bag
                  </h2>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={closeCart}
                  className="grid size-10 place-items-center rounded-full hover:bg-mist"
                  aria-label="Close bag"
                >
                  <X className="size-5" strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 pb-5">
                {items.length === 0 ? (
                  <div className="rounded-[1.5rem] bg-mist/70 px-5 py-10 text-center">
                    <p className="font-display text-lg font-semibold">Your bag is empty</p>
                    <p className="mt-2 text-sm text-muted">
                      Add a dish from the menu and it will land here.
                    </p>
                    <Button href="#menu" className="mt-5" onClick={closeCart}>
                      Explore Menu
                    </Button>
                  </div>
                ) : (
                  <ul className="flex flex-col gap-3">
                    {items.map((item) => (
                      <li
                        key={item.id}
                        className="flex gap-3 rounded-[1.25rem] bg-canvas p-2"
                      >
                        <div className="relative size-16 overflow-hidden rounded-2xl">
                          <Image
                            src={item.image}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="min-w-0 flex-1 py-1">
                          <p className="truncate font-medium">{item.name}</p>
                          <p className="text-sm text-muted">
                            {formatNaira(item.price)}
                          </p>
                          <div className="mt-2 flex items-center gap-2">
                            <button
                              type="button"
                              className="grid size-7 place-items-center rounded-full bg-white ring-1 ring-ink/10 active:scale-95"
                              onClick={() =>
                                setQuantity(item.id, item.quantity - 1)
                              }
                              aria-label={`Decrease ${item.name}`}
                            >
                              <Minus className="size-3.5" strokeWidth={1.5} />
                            </button>
                            <span className="w-4 text-center text-sm">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              className="grid size-7 place-items-center rounded-full bg-white ring-1 ring-ink/10 active:scale-95"
                              onClick={() =>
                                setQuantity(item.id, item.quantity + 1)
                              }
                              aria-label={`Increase ${item.name}`}
                            >
                              <Plus className="size-3.5" strokeWidth={1.5} />
                            </button>
                            <button
                              type="button"
                              className="ml-auto text-sm text-muted hover:text-chili"
                              onClick={() => removeItem(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {items.length > 0 ? (
                <div className="border-t border-ink/8 px-5 py-4">
                  <div className="mb-3 flex items-center justify-between text-sm">
                    <span className="text-muted">Subtotal</span>
                    <span className="font-display text-lg font-semibold">
                      {formatNaira(subtotal)}
                    </span>
                  </div>
                  <Button size="lg" className="w-full" icon>
                    Order Now
                  </Button>
                </div>
              ) : null}
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
