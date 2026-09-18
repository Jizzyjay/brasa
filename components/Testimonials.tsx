"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section
      className="px-4 py-16 md:px-8 md:py-24"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <h2
            id="reviews-heading"
            className="font-display text-3xl font-semibold tracking-tight md:text-4xl"
          >
            People keep coming back
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            A few notes from tables around the city — unscripted, and short on purpose.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <blockquote className="flex h-full flex-col justify-between rounded-[2rem] bg-char p-8 text-white md:p-10">
              <p className="font-display text-2xl leading-snug font-medium tracking-tight md:text-3xl">
                “{featured.quote}”
              </p>
              <footer className="mt-8 flex items-center gap-3">
                <Avatar src={featured.avatar} name={featured.name} />
                <div>
                  <cite className="not-italic font-medium">{featured.name}</cite>
                  <p className="text-sm text-white/65">{featured.neighborhood}</p>
                </div>
                <Stars rating={featured.rating} className="ml-auto text-star" />
              </footer>
            </blockquote>
          </Reveal>

          <div className="grid gap-5">
            {rest.map((review, index) => (
              <Reveal key={review.id} delay={0.05 * (index + 1)}>
                <blockquote className="rounded-[1.75rem] bg-white p-5 ring-1 ring-ink/8 md:p-6">
                  <Stars rating={review.rating} className="text-star" />
                  <p className="mt-3 text-base leading-relaxed text-ink">
                    “{review.quote}”
                  </p>
                  <footer className="mt-4 flex items-center gap-3">
                    <Avatar src={review.avatar} name={review.name} />
                    <div>
                      <cite className="not-italic text-sm font-medium">
                        {review.name}
                      </cite>
                      <p className="text-xs text-muted">{review.neighborhood}</p>
                    </div>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Avatar({ src, name }: { src: string; name: string }) {
  return (
    <div className="relative size-10 overflow-hidden rounded-full bg-mist">
      <Image src={src} alt={name} fill className="object-cover" sizes="40px" />
    </div>
  );
}

function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className ?? ""}`} aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="size-3.5"
          strokeWidth={1.5}
          fill={index < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}
