import type { ClassValue } from "clsx";
import type { TailwindConfig } from "tw-to-css";

import clsx from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function createTailwindConverter() {
  const { tailwindToCSS } = await import("tw-to-css");
  let twConfig = (await import("../../tailwind.config"))
    .default as TailwindConfig;
  twConfig = {
    ...twConfig,
    plugins: [...twConfig.plugins!.slice(0, 1), ...twConfig.plugins!.slice(2)],
  };
  const { twj } = tailwindToCSS({ config: twConfig });
  return twj;
}
