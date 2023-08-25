/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        contentBackground: "hsl(var(--contentBackground))",
        headerBackground: "hsl(var(--headerBackground))",
        altGray: "hsl(var(--altGray))",
        contrast: "hsl(var(--contrast))",
        offset: "hsl(var(--offset))",
      },
    },
  },
  plugins: [],
}
