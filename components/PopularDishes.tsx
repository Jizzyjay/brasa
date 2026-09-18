"use client";

import { motion, useReducedMotion } from "motion/react";
import { FoodCard } from "@/components/FoodCard";
import { Reveal } from "@/components/Reveal";
import { useMenuFilter } from "@/components/MenuFilter";
import { categories, dishes } from "@/lib/data";
import { springSoft } from "@/lib/motion";

export function PopularDishes() {
  const { categoryId, setCategoryId } = useMenuFilter();
  const reduce = useReducedMotion();
  const visible = categoryId
    ? dishes.filter((dish) => dish.categoryId === categoryId)
    : dishes;

  const activeName =
    categories.find((category) => category.id === categoryId)?.name ?? "All";

  return (
    <section
      id="menu"
      className="scroll-mt-28 px-4 py-16 md:px-8 md:py-24"
      aria-labelledby="menu-heading"
    >
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                id="menu-heading"
                className="font-display text-3xl font-semibold tracking-tight md:text-4xl"
              >
                Tonight’s favorites
              </h2>
              <p className="mt-3 max-w-lg text-muted">
                A short list we actually cook every evening — priced for Lagos,
                built for a weeknight.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <FilterChip
                label="All"
                selected={categoryId === null}
                onClick={() => setCategoryId(null)}
              />
              {categories.map((category) => (
                <FilterChip
                  key={category.id}
                  label={category.name}
                  selected={categoryId === category.id}
                  onClick={() => setCategoryId(category.id)}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {visible.length === 0 ? (
          <div className="mt-10 rounded-[1.75rem] bg-white px-6 py-12 text-center ring-1 ring-ink/8">
            <p className="font-display text-xl font-semibold">
              No {activeName.toLowerCase()} on the board tonight
            </p>
            <p className="mt-2 text-muted">Browse another craving, or see the full menu.</p>
            <button
              type="button"
              className="mt-5 text-sm font-medium text-chili"
              onClick={() => setCategoryId(null)}
            >
              Show all dishes
            </button>
          </div>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={reduce ? false : { y: 16 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ ...springSoft, delay: reduce ? 0 : index * 0.04 }}
              >
                <FoodCard dish={dish} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FilterChip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200 active:scale-95 ${
        selected ? "bg-ink text-white" : "bg-white text-ink ring-1 ring-ink/10 hover:bg-mist"
      }`}
      aria-pressed={selected}
    >
      {label}
    </button>
  );
}
