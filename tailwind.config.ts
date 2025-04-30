import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        peach: "#FFE4CE",
        blue: "#264653",
        site_orange: "#F29040",
        site_red: "#BB2828",
        site_navy: "#1E2A3A",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#0D181C", //black
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#BB2828",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        titillium: ["var(--font-titillium)"],
        montserrat: ["var(--font-montserrat)"],
        site_header: ["var(--font-source-code-pro)"],
        site_button: ["var(--font-source-code-pro)"],
        site_nav_item: ["var(--font-source-code-pro)"],
        site_1st_paragraph: ["var(--font-source-sans-pro)"],
        site_2nd_paragraph: ["var(--font-source-sans-pro)"],
      },
      keyframes: {
        "slide-in": {
          "0%": {
            visibility: "visible",
            right: "100%",
          },
          "100%": {
            visibility: "visible",
            right: "0%",
          },
        },
        fadeIn: {
          "0%": { opacity: '0', transform: 'translateY(-10px)' },
          "100%": { opacity: '1', transform: 'translateY(0)' },
        },
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
        "slide-in-3s": "slide-in 3s ease-out forwards",
        "slide-in-500": "slide-in 500ms ease-out forwards",
        "fade-in-heading": "fadeIn 0.5s ease-out",
        "fade-in-content": "fadeIn 0.7s ease-out",
        "fade-in-button": "fadeIn 0.9s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
