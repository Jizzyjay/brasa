export const springSoft = {
  type: "spring" as const,
  bounce: 0,
  duration: 0.4,
};

export const springSnappy = {
  type: "spring" as const,
  bounce: 0,
  duration: 0.3,
};

export const springFlick = {
  type: "spring" as const,
  bounce: 0.2,
  duration: 0.35,
};

export const easeOutQuart = [0.32, 0.72, 0, 1] as const;
