/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        emailFlyingAnimation : {
         "0%": {
            transform: "rotate(0deg) translateX(-200px) translateY(200px) rotate(0deg)"
          },
          "100%": {
            transform: "rotate(0deg) translateX(500px) translateY(0px) rotate(0deg)"
          }
        },
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'email-flying-animation': 'emailFlyingAnimation 1s ease-in-out',
      },
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
