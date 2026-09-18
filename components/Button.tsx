import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "md" | "lg";
  icon?: boolean;
  type?: "button" | "submit";
  className?: string;
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-chili text-white shadow-soft hover:bg-chili-dark",
  secondary:
    "bg-white text-ink ring-1 ring-ink/10 hover:bg-mist",
  ghost: "bg-transparent text-ink ring-1 ring-ink/12 hover:bg-white/70",
  dark: "bg-char text-white hover:bg-ink",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = false,
  type = "button",
  className,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]",
    size === "lg" ? "h-12 px-5 text-base" : "h-11 px-4 text-sm",
    variants[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {icon ? (
        <span
          className={cn(
            "grid size-7 place-items-center rounded-full transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px",
            variant === "primary" || variant === "dark"
              ? "bg-white/15"
              : "bg-ink/8",
          )}
        >
          <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
