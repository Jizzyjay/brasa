"use client";

import { motion, useReducedMotion } from "motion/react";
import { springSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...springSoft, delay }}
    >
      {children}
    </motion.div>
  );
}
