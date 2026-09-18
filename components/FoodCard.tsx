"use client";

import Image from "next/image";
import { Plus, Star } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import type { Dish } from "@/lib/types";
import { formatNaira } from "@/lib/utils";

type FoodCardProps = {
  dish: Dish;
};

export function FoodCard({ dish }: FoodCardProps) {
  const { addItem } = useCart();

  return (
    <article className="group rounded-[1.75rem] bg-white p-1.5 shadow-soft ring-1 ring-ink/6 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-mist">
        <Image
          src={dish.image}
          alt={dish.alt}
          fill
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {dish.tag ? (
          <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-medium text-olive shadow-soft">
            {dish.tag}
          </span>
        ) : null}
      </div>
      <div className="flex flex-col gap-3 px-3 pt-4 pb-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg leading-tight font-semibold">
            {dish.name}
          </h3>
          <p className="flex items-center gap-1 text-sm font-medium">
            <Star className="size-3.5 text-star" strokeWidth={1.5} fill="currentColor" />
            {dish.rating.toFixed(1)}
          </p>
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted">
          {dish.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <p className="font-display text-lg font-semibold">
            {formatNaira(dish.price)}
          </p>
          <button
            type="button"
            onClick={() => addItem(dish)}
            className="inline-flex items-center gap-1.5 rounded-full bg-chili px-3.5 py-2 text-sm font-medium text-white transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-chili-dark active:scale-95"
            aria-label={`Add ${dish.name} to bag`}
          >
            <Plus className="size-4" strokeWidth={1.5} />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
