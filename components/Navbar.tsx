"use client";

import { useEffect, useState } from "react";
import { Search, ShoppingBag } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { useCart } from "@/components/CartProvider";
import { useOverlay } from "@/components/OverlayProvider";
import { navLinks } from "@/lib/data";
import { springSnappy } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const { count, openCart, closeCart } = useCart();
  const { menuOpen, toggleMenu, closeMenu, openSearch } = useOverlay();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((node): node is Element => node instanceof Element);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  function handleNavClick() {
    closeMenu();
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
        <div
          className={cn(
            "glass-nav mx-auto flex max-w-[1240px] items-center justify-between gap-3 rounded-[1.75rem] px-3 py-2 ring-1 transition-[background-color,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] md:px-4",
            scrolled
              ? "bg-white/78 shadow-float ring-ink/8 backdrop-blur-xl"
              : "bg-white/55 shadow-soft ring-white/60 backdrop-blur-md",
          )}
        >
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm transition-colors duration-200",
                  active === link.href
                    ? "bg-ink text-white"
                    : "text-ink/75 hover:bg-mist hover:text-ink",
                )}
                aria-current={active === link.href ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => {
                closeCart();
                openSearch();
              }}
              className="grid size-10 place-items-center rounded-full text-ink transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-mist active:scale-95"
              aria-label="Search the menu"
            >
              <Search className="size-5" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={() => {
                closeMenu();
                openCart();
              }}
              className="relative grid size-10 place-items-center rounded-full text-ink transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-mist active:scale-95"
              aria-label={`Open bag, ${count} items`}
            >
              <ShoppingBag className="size-5" strokeWidth={1.5} />
              {count > 0 ? (
                <span className="absolute top-1 right-1 grid min-w-4 place-items-center rounded-full bg-chili px-1 text-[10px] leading-4 font-semibold text-white">
                  {count}
                </span>
              ) : null}
            </button>

            <div className="hidden lg:block">
              <Button href="#menu" icon>
                Order Now
              </Button>
            </div>

            <button
              type="button"
              className="grid size-10 place-items-center rounded-full hover:bg-mist lg:hidden"
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="relative block size-4">
                <span
                  className={cn(
                    "absolute top-0.5 left-0 h-px w-4 bg-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                    menuOpen && "top-2 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute top-2 left-0 h-px w-4 bg-ink transition-opacity duration-200",
                    menuOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute top-3.5 left-0 h-px w-4 bg-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                    menuOpen && "top-2 -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-char/88 px-6 pt-24 backdrop-blur-2xl lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={springSnappy}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="font-display text-4xl font-semibold tracking-tight text-white"
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...springSnappy, delay: 0.04 * index }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-8">
              <Button href="#menu" onClick={handleNavClick} size="lg" icon>
                Order Now
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
