import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    fontFamily: {
      montserrat: ["var(--font-montserrat)"],
      jost: ["var(--font-jost)"],
    },
    extend: {
      colors: {
        primary: "rgb(var(--primary)/<alpha-value>)",
        secondary: "rgb(var(--secondary)/<alpha-value>)",
        success: "rgb(var(--success)/<alpha-value>)",
        error: "rgb(var(--error)/<alpha-value>)",
        "background-03": "rgb(var(--background-03)/<alpha-value>)",
        "background-02": "rgb(var(--background-02)/<alpha-value>)",
        "background-01": "rgb(var(--background-01)/<alpha-value>)",
        line: "rgb(var(--line)/<alpha-value>)",
        text: "rgb(var(--text)/<alpha-value>)",
        "text-body": "rgb(var(--text-body)/<alpha-value>)",
        black: "#000000",
        white: "#ffffff",
        transparent: "transparent",
      },
      dropShadow: {
        sm: "0 0 10px rgb(174,192,206)",
        base: "0 0 20px rgb(174,192,206)",
      },
      fontSize: {
        "4.5xl": "2.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3.75rem",
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
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
export default config;
