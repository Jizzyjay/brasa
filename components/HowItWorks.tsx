"use client";

import { ShoppingBag, Soup, UtensilsCrossed } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    title: "Choose Your Meal",
    copy: "Browse tonight’s board and tap the dish you actually want — not a 40-page PDF menu.",
    icon: UtensilsCrossed,
  },
  {
    title: "Place Your Order",
    copy: "Pay in a minute. We fire the ticket the moment it lands, not when a rider happens to be free.",
    icon: ShoppingBag,
  },
  {
    title: "Enjoy Your Food",
    copy: "A rider brings it while it’s hot. You open the bag. That’s the whole product.",
    icon: Soup,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-28 px-4 py-20 md:px-8 md:py-28"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <h2
            id="how-heading"
            className="font-display text-3xl font-semibold tracking-tight md:text-4xl"
          >
            From kitchen to doorstep
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            Three steps. No app store lecture. Dinner should not need a tutorial.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title}>
                <Reveal delay={index * 0.06}>
                  <div className="h-full rounded-[1.75rem] bg-white p-6 ring-1 ring-ink/8">
                    <div className="flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-2xl bg-mist text-olive">
                        <Icon className="size-5" strokeWidth={1.5} />
                      </span>
                      <span className="font-display text-3xl font-semibold text-mist">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.copy}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
