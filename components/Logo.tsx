import { Flame } from "lucide-react";
import { brand } from "@/lib/data";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  onDark?: boolean;
};

export function Logo({ className, onDark = false }: LogoProps) {
  return (
    <a
      href="#home"
      className={cn("inline-flex shrink-0 cursor-pointer items-center gap-2", className)}
      aria-label={`${brand.name} home`}
    >
      <span
        className={cn(
          "grid size-8 place-items-center rounded-full sm:size-9",
          onDark ? "bg-chili text-white" : "bg-chili text-white",
        )}
      >
        <Flame className="size-4" strokeWidth={1.5} />
      </span>
      <span
        className={cn(
          "font-display text-base font-semibold tracking-tight sm:text-lg md:text-xl",
          onDark ? "text-white" : "text-ink",
        )}
      >
        {brand.name}
      </span>
    </a>
  );
}
