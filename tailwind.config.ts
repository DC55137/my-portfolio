import type { Config } from "tailwindcss";
import * as radix from "@radix-ui/colors";
import plugin from "tailwindcss/plugin";

const spacing = {
  0: rem(0),
  1: rem(4),
  2: rem(8),
  3: rem(12),
  4: rem(16),
  5: rem(24),
  6: rem(32),
  7: rem(40),
  8: rem(64),
  9: rem(80),
  10: rem(160),
};

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        main: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        ...fromRadix(radix.slateDark, "base"),
        ...fromRadix(radix.mintDark, "accent"),
        ...fromRadix(radix.greenDark, "success"),
        ...fromRadix(radix.greenDarkA, "success-a"),
        ...fromRadix(radix.redDark, "error"),
      },
      spacing,
      minWidth: spacing,
      minHeight: spacing,
      fontSize: {
        1: rem(12),
        2: rem(14),
        3: rem(16),
        4: rem(18),
        5: rem(20),
        6: rem(24),
        7: rem(28),
        8: rem(35),
        9: rem(60),
      },
      letterSpacing: {
        1: "0.0025em",
        2: "0em",
        3: "0em",
        4: "-0.0025em",
        5: "-0.005em",
        6: "-0.00625em",
        7: "-0.0075em",
        8: "-0.01em",
        9: "-0.025em",
      },
      lineHeight: {
        1: rem(16),
        2: rem(20),
        3: rem(24),
        4: rem(26),
        5: rem(28),
        6: rem(30),
        7: rem(36),
        8: rem(40),
        9: rem(68),
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function typographyStyles({ matchUtilities, theme }) {
      matchUtilities(
        {
          typography: (value) => {
            return {
              fontSize: theme(`fontSize.${value}`),
              lineHeight: theme(`lineHeight.${value}`),
              letterSpacing: theme(`letterSpacing.${value}`),
            };
          },
        },
        {
          values: Object.keys(theme("fontSize")).reduce(
            (acc, i) => ({ ...acc, [i]: i }),
            {}
          ),
        }
      );
    }),
    plugin(function textColors({ addUtilities, theme }) {
      addUtilities({
        ".text-base": { color: theme("colors.base-12") },
        ".text-dimmed": { color: theme("colors.base-11") },
        ".text-extradimmed": { color: theme("colors.base-8") },
        ".text-contrast": { color: "black" },
        ".text-accent": { color: theme("colors.accent-11") },
      });
    }),
  ],
  variants: {
    extend: {
      typography: ["responsive"],
    },
  },
} satisfies Config;

export default config;

function rem(from: number): string {
  return `${from / 16}rem`;
}

function fromRadix(
  palette: Record<string, string> = {},
  name: string = ""
): Record<string, string> {
  return Object.values(palette).reduce(
    (acc, color, i) => ({
      ...acc,
      [`${name}-${i + 1}`]: color,
    }),
    {}
  );
}
