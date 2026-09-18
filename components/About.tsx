"use client";

import Image from "next/image";
import { Leaf, Timer, Utensils } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const points = [
  {
    title: "Fresh ingredients",
    copy: "Produce in the morning, tickets at lunch. We don’t thaw a week of inventory and hope.",
    icon: Leaf,
  },
  {
    title: "Quality meals",
    copy: "The same burgers and pasta we’d send to a friend’s house. Seasoned like we mean it.",
    icon: Utensils,
  },
  {
    title: "Fast, honest delivery",
    copy: "25–35 minutes across Lekki, Ikeja, and the Island when traffic behaves — and we say so when it doesn’t.",
    icon: Timer,
  },
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 px-4 py-16 md:px-8 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-mist shadow-lift">
            <div className="relative aspect-[4/5] md:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=80"
                alt="Cook finishing a pan of food in the Brasa kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            id="about-heading"
            className="font-display text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl md:leading-[1.1]"
          >
            Cooked like it’s for our own table
          </h2>
          <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-muted">
            Brasa started as a small Lagos kitchen that refused to send lukewarm
            food across town. We still cook in small batches, pack it tight, and
            ride it over while the steam is on the lid.
          </p>
          <ul className="mt-8 flex flex-col gap-5">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <li key={point.title} className="flex gap-4">
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-2xl bg-mist text-olive">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-medium">{point.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {point.copy}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
