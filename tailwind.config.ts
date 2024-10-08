import type { Config } from "tailwindcss";

const config: Config = {
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
        'angular-gradient': 'linear-gradient(0deg, #C4C4C4 0%, #F5F5F5 100%)',
        'watch': "url('/assets/black.jpg')",
        'black2': "url('/assets/black2.jpg')",
        'black3': "url('/assets/sale1.jpg')",
        'black4': "url('/assets/black4.jpg')",
        'black5': "url('/assets/sale1.jpg')",
        'black6': "url('/assets/sales2.jpg')"
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        zoom: 'zoom 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
