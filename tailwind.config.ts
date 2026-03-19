import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0A0F0D",
          darker: "#060906",
          green: "#2ECC71",
          "green-hover": "#27AE60",
          "green-muted": "#1a7a43",
          gray: {
            50: "#f7f7f7",
            100: "#e3e3e3",
            200: "#c8c8c8",
            300: "#a4a4a4",
            400: "#818181",
            500: "#666666",
            600: "#515151",
            700: "#434343",
            800: "#383838",
            900: "#1a1a1a",
            950: "#111111",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
