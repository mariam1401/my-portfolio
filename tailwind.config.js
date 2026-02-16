/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins Placeholder", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1100px",   // 👈 changed from 1024 to 1100
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
}

