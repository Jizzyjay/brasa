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
    if (!value) return dishes.slice(0, 4);
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
          className="fixed inset-0 z-50 grid place-items-start justify-center px-3 pt-20 sm:px-4 sm:pt-24"
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
            className="relative w-full max-w-[20.5rem] overflow-hidden rounded-2xl bg-white p-1.5 shadow-lift ring-1 ring-ink/8 sm:max-w-lg sm:rounded-[1.75rem] sm:p-2 md:max-w-xl"
            initial={reduce ? false : { y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { y: 12, opacity: 0 }}
            transition={springSnappy}
          >
            <h2 id="search-title" className="sr-only">
              Search the menu
            </h2>
            <div className="flex items-center gap-1.5 rounded-xl bg-canvas px-2.5 sm:gap-2 sm:rounded-[1.25rem] sm:px-4">
              <Search
                className="size-4 shrink-0 text-muted sm:size-5"
                strokeWidth={1.5}
              />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search dishes"
                className="h-9 min-w-0 w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted sm:h-12 sm:text-base"
              />
              <button
                type="button"
                onClick={closeSearch}
                className="grid size-7 shrink-0 cursor-pointer place-items-center rounded-full hover:bg-white sm:size-8"
                aria-label="Close search"
              >
                <X className="size-3.5 sm:size-4" strokeWidth={1.5} />
              </button>
            </div>
            <ul className="mt-1.5 max-h-[42vh] overflow-y-auto p-1 sm:mt-2 sm:max-h-[50vh] sm:p-2">
              {results.length === 0 ? (
                <li className="px-2 py-4 text-sm text-muted sm:px-3 sm:py-6">
                  Nothing matches “{query}”. Try burger, pasta, or rice.
                </li>
              ) : (
                results.map((dish) => (
                  <li key={dish.id}>
                    <a
                      href="#menu"
                      onClick={closeSearch}
                      className="flex items-center gap-2.5 rounded-xl p-1.5 hover:bg-canvas sm:gap-3 sm:rounded-2xl sm:p-2"
                    >
                      <div className="relative size-9 shrink-0 overflow-hidden rounded-lg sm:size-12 sm:rounded-xl">
                        <Image
                          src={dish.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium sm:text-base">
                          {dish.name}
                        </span>
                        <span className="mt-0.5 hidden truncate text-sm text-muted sm:block">
                          {dish.description}
                        </span>
                      </span>
                      <span className="shrink-0 text-xs font-medium sm:text-sm">
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
