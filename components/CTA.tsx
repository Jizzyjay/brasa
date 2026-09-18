"use client";

import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function CTA() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24" aria-labelledby="cta-heading">
      <Reveal>
        <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[2rem] bg-chili px-8 py-16 text-center text-white md:px-16 md:py-24">
          <div className="pointer-events-none absolute -top-16 -left-10 size-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -right-10 -bottom-20 size-72 rounded-full bg-char/20 blur-2xl" />
          <h2
            id="cta-heading"
            className="relative font-display text-3xl font-semibold tracking-tight md:text-5xl"
          >
            Craving something delicious?
          </h2>
          <p className="relative mx-auto mt-4 max-w-[36ch] text-base text-white/85 md:text-lg">
            Your next favorite meal is a few taps away — still hot, still yours.
          </p>
          <div className="relative mt-8 flex justify-center">
            <Button href="#menu" variant="dark" size="lg" icon>
              Order Now
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
