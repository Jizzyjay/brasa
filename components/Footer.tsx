"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { Camera, Globe, Mail, MapPin, Phone, Play } from "lucide-react";
import { Logo } from "@/components/Logo";
import { brand, navLinks } from "@/lib/data";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setStatus("error");
      return;
    }
    setStatus("ok");
    setEmail("");
  }

  return (
    <footer id="contact" className="scroll-mt-28 bg-char text-white">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-4 py-16 md:grid-cols-2 md:px-8 md:py-20 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo onDark />
          <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-white/70">
            {brand.blurb}
          </p>
          <div className="mt-5 flex gap-2">
            <Social href="https://instagram.com" label="Instagram">
              <Camera className="size-4" strokeWidth={1.5} />
            </Social>
            <Social href="https://facebook.com" label="Facebook">
              <Globe className="size-4" strokeWidth={1.5} />
            </Social>
            <Social href="https://youtube.com" label="YouTube">
              <Play className="size-4" strokeWidth={1.5} />
            </Social>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-white/50">Menu</p>
          <ul className="mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/80 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white/50">Kitchen</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" strokeWidth={1.5} />
              14 Adeola Odeku Street, Victoria Island, Lagos
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" strokeWidth={1.5} />
              <a href="tel:+2342013304410">+234 20 1330 4410</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" strokeWidth={1.5} />
              <a href="mailto:hello@brasa.kitchen">hello@brasa.kitchen</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white/50">Weekly drops</p>
          <p className="mt-4 text-sm text-white/70">
            New dishes, off-menu specials, and the occasional free delivery window.
          </p>
          <form onSubmit={onSubmit} className="mt-4" noValidate>
            <label htmlFor="newsletter" className="sr-only">
              Email address
            </label>
            <div className="flex rounded-full bg-white/8 p-1 ring-1 ring-white/12">
              <input
                id="newsletter"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setStatus("idle");
                }}
                placeholder="you@email.com"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/40"
                autoComplete="email"
              />
              <button
                type="submit"
                className="rounded-full bg-chili px-4 py-2 text-sm font-medium text-white transition-transform active:scale-95 hover:bg-chili-dark"
              >
                Join
              </button>
            </div>
            {status === "error" ? (
              <p className="mt-2 text-sm text-red-300" role="alert">
                Enter a valid email to join.
              </p>
            ) : null}
            {status === "ok" ? (
              <p className="mt-2 text-sm text-green-300" role="status">
                You’re on the list.
              </p>
            ) : null}
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-2 px-4 py-5 text-xs text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Brasa Kitchen. A fictional portfolio brand.</p>
          <p>Lagos · Abuja · Port Harcourt</p>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="grid size-10 place-items-center rounded-full bg-white/8 ring-1 ring-white/10 hover:bg-white/14"
    >
      {children}
    </a>
  );
}
