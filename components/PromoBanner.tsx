"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function PromoBanner() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-12" aria-labelledby="promo-heading">
      <Reveal>
        <div className="mx-auto grid max-w-[1240px] overflow-hidden rounded-[1.5rem] bg-olive text-white sm:rounded-[2rem] md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center px-5 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16">
            <p className="text-sm font-medium text-white/70">First bag, on the house</p>
            <h2
              id="promo-heading"
              className="mt-3 font-display text-2xl leading-tight font-semibold tracking-tight sm:text-3xl md:text-5xl"
            >
              Your first order is on us.
            </h2>
            <p className="mt-4 max-w-[40ch] text-base leading-relaxed text-white/80">
              Get 20% off your first meal and find the dish you’ll keep coming back to.
              Code <span className="font-semibold text-white">BRASA20</span> at checkout.
            </p>
            <div className="mt-8">
              <Button href="#menu" variant="primary" size="lg" icon>
                Order Now
              </Button>
            </div>
          </div>
          <div className="relative min-h-[200px] sm:min-h-[260px] md:min-h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80"
              alt="Plated pasta with herbs and olive oil"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-olive/50 to-transparent md:bg-linear-to-l" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
