"use client";

import Image from "next/image";
import { categories } from "@/lib/data";
import { useMenuFilter } from "@/components/MenuFilter";
import { Reveal } from "@/components/Reveal";

export function Categories() {
  const { categoryId, setCategoryId } = useMenuFilter();

  return (
    <section className="px-4 py-16 md:px-8 md:py-24" aria-labelledby="categories-heading">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <h2
            id="categories-heading"
            className="font-display text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Start with a craving
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            Seven kitchens in one bag. Pick a lane, or scroll the full menu.
          </p>
        </Reveal>

        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none lg:grid lg:grid-cols-7 lg:gap-4 lg:overflow-visible lg:pb-0">
          {categories.map((category) => {
            const selected = categoryId === category.id;
            return (
              <a
                key={category.id}
                href="#menu"
                onClick={() => setCategoryId(category.id)}
                className="group w-[7.5rem] shrink-0 snap-start lg:w-auto"
              >
                <div
                  className={`rounded-[1.5rem] p-1.5 ring-1 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-0.5 group-hover:shadow-float group-active:scale-[0.98] ${
                    selected
                      ? "bg-olive/10 ring-olive/30"
                      : "bg-white ring-ink/8"
                  }`}
                >
                  <div className="relative aspect-square overflow-hidden rounded-[1.15rem]">
                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                      sizes="(max-width: 768px) 120px, 160px"
                    />
                  </div>
                  <p className="py-3 text-center text-sm font-medium">{category.name}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
