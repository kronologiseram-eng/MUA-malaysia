import type { Variants } from "framer-motion";

/** Signature easing curve — buttery, premium feel. */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Parent orchestrator — staggers every direct motion child. */
export const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

/** Shared entrance: soft rise + de-blur. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};
