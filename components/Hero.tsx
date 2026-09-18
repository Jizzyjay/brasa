"use client";

import Image from "next/image";
import { Clock, Star, Users } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/Button";
import { brand, heroStats } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[min(100dvh,52rem)] px-4 pt-28 pb-16 md:px-8 md:pt-36 md:pb-24"
    >
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-8">
        <div className="max-w-xl">
          <p className="hero-rise text-sm font-medium text-olive">
            Lagos kitchen, city-wide delivery
          </p>
          <h1 className="hero-rise hero-rise-1 mt-4 font-display text-[clamp(2.15rem,8vw,5.5rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-ink sm:tracking-[-0.04em]">
            Good Food.
            <br />
            Delivered Fresh.
          </h1>
          <p className="hero-rise hero-rise-2 mt-5 max-w-[38ch] text-lg leading-relaxed text-muted">
            Burgers off the grill, pasta finished to order, and rice with a proper
            kick — packed and sent while it’s still steaming.
          </p>
          <div className="hero-rise hero-rise-3 mt-8 flex flex-wrap items-center gap-3">
            <Button href="#menu" size="lg" icon>
              Order Now
            </Button>
            <Button href="#menu" variant="secondary" size="lg">
              Explore Menu
            </Button>
          </div>
        </div>

        <div className="hero-rise hero-rise-1 relative mx-auto w-full max-w-[540px]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-8 -left-6 size-[78%] rounded-full bg-olive/12 blur-2xl" />
            <div className="absolute right-0 bottom-4 size-[55%] rounded-full bg-chili/10 blur-2xl" />
          </div>

          <div className="relative mx-auto aspect-square max-w-[460px]">
            <div className="absolute inset-[8%] overflow-hidden rounded-full bg-mist shadow-lift ring-8 ring-white">
              <Image
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80"
                alt="Brasa signature burger with melted cheese and toasted bun"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 460px"
              />
            </div>

            <FloatCard className="top-[12%] left-0 sm:-left-4">
              <Star className="size-4 text-star" strokeWidth={1.5} fill="currentColor" />
              <div>
                <p className="text-sm font-semibold leading-none">{heroStats.rating}</p>
                <p className="mt-1 text-xs text-muted">Guest rating</p>
              </div>
            </FloatCard>

            <FloatCard className="top-[18%] right-0 max-sm:hidden sm:-right-2">
              <Clock className="size-4 text-olive" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold leading-none">{heroStats.delivery}</p>
                <p className="mt-1 text-xs text-muted">Typical arrival</p>
              </div>
            </FloatCard>

            <FloatCard className="bottom-[16%] left-0 max-w-[200px] max-sm:hidden sm:-left-6">
              <div className="relative size-9 overflow-hidden rounded-full">
                <Image
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=120&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <div>
                <p className="text-xs text-muted">Tonight’s pick</p>
                <p className="text-sm leading-tight font-semibold">
                  {heroStats.popularDish}
                </p>
              </div>
            </FloatCard>

            <FloatCard className="right-0 bottom-[12%] max-sm:hidden sm:-right-3">
              <Users className="size-4 text-chili" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold leading-none">
                  {heroStats.customers}
                </p>
                <p className="mt-1 text-xs text-muted">Meals this month</p>
              </div>
            </FloatCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute z-10 flex items-center gap-2.5 rounded-2xl bg-white px-3 py-2.5 shadow-float ring-1 ring-ink/6",
        className,
      )}
    >
      {children}
    </div>
  );
}
