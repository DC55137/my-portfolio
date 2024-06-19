import type { Config } from "tailwindcss";
import * as radix from "@radix-ui/colors";
import plugin from "tailwindcss/plugin";

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
          1: "#051416",
          2: "#081c1f",
          3: "#002d33",
          4: "#003c43",
          5: "#004a53",
          6: "#005a65",
          7: "#006d79",
          8: "#008492",
          9: "#79eefd",
          10: "#6ee4f3",
          11: "#5ecedd",
          12: "#bef4fc",

          a1: "#0091e606",
          a2: "#00ccff0f",
          a3: "#00d2fb25",
          a4: "#00ddfe36",
          a5: "#00deff47",
          a6: "#00e0ff5a",
          a7: "#00e2fd70",
          a8: "#00e4fe8b",
          a9: "#7af0fffd",
          a10: "#72eefef3",
          a11: "#6beeffdb",
          a12: "#c0f7fffc",

          contrast: "#03272b",
          surface: "#00272d80",
          indicator: "#79eefd",
          track: "#79eefd",
        },

        ...fromRadix(radix.sageDark, "base"),
        ...fromRadix(radix.mintDark, "accent"),
        ...fromRadix(radix.greenDark, "success"),
        ...fromRadix(radix.greenDarkA, "success-a"),
        ...fromRadix(radix.redDark, "error"),
      },
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
          typography: (value) => ({
            fontSize: theme(`fontSize.${value}`),
            lineHeight: theme(`lineHeight.${value}`),
            letterSpacing: theme(`letterSpacing.${value}`),
          }),
        },
        {
          values: Object.keys(theme("fontSize")).reduce(
            (acc, key) => ({ ...acc, [key]: key }),
            {}
          ),
        }
      );
    }),
    plugin(function textColors({ addUtilities, theme }) {
      addUtilities({
        ".text-default": { color: theme("colors.main.12") },
        ".text-dimmed": { color: theme("colors.base-11") },
        ".text-extradimmed": { color: theme("colors.base-8") },
        ".text-contrast": { color: "black" },
        ".text-accent": { color: theme("colors.accent-11") },
      });
    }),
  ],
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
