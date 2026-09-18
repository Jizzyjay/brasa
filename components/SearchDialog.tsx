"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useOverlay } from "@/components/OverlayProvider";
import { dishes } from "@/lib/data";
import { springSnappy } from "@/lib/motion";
import { formatNaira } from "@/lib/utils";

export function SearchDialog() {
  const { searchOpen, closeSearch } = useOverlay();
  const reduce = useReducedMotion();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return dishes.slice(0, 6);
    return dishes.filter(
      (dish) =>
        dish.name.toLowerCase().includes(value) ||
        dish.description.toLowerCase().includes(value),
    );
  }, [query]);

  useEffect(() => {
    if (!searchOpen) return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 40);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSearch();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(id);
      document.removeEventListener("keydown", onKey);
    };
  }, [closeSearch, searchOpen]);

  return (
    <AnimatePresence>
      {searchOpen ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-start justify-center px-4 pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-char/40"
            aria-label="Close search"
            onClick={closeSearch}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-title"
            className="relative w-full max-w-xl overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-lift ring-1 ring-ink/8"
            initial={reduce ? false : { y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { y: 12, opacity: 0 }}
            transition={springSnappy}
          >
            <h2 id="search-title" className="sr-only">
              Search the menu
            </h2>
            <div className="flex items-center gap-2 rounded-[1.25rem] bg-canvas px-4">
              <Search className="size-5 text-muted" strokeWidth={1.5} />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search burgers, pasta, rice..."
                className="h-12 w-full bg-transparent text-base text-ink outline-none placeholder:text-muted"
              />
              <button
                type="button"
                onClick={closeSearch}
                className="grid size-8 place-items-center rounded-full hover:bg-white"
                aria-label="Close search"
              >
                <X className="size-4" strokeWidth={1.5} />
              </button>
            </div>
            <ul className="mt-2 max-h-[50vh] overflow-y-auto p-2">
              {results.length === 0 ? (
                <li className="px-3 py-6 text-sm text-muted">
                  Nothing matches “{query}”. Try burger, pasta, or rice.
                </li>
              ) : (
                results.map((dish) => (
                  <li key={dish.id}>
                    <a
                      href="#menu"
                      onClick={closeSearch}
                      className="flex items-center gap-3 rounded-2xl p-2 hover:bg-canvas"
                    >
                      <div className="relative size-12 overflow-hidden rounded-xl">
                        <Image
                          src={dish.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium">
                          {dish.name}
                        </span>
                        <span className="block truncate text-sm text-muted">
                          {dish.description}
                        </span>
                      </span>
                      <span className="text-sm font-medium">
                        {formatNaira(dish.price)}
                      </span>
                    </a>
                  </li>
                ))
              )}
            </ul>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
