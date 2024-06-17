/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        BLMelody: ['"BL Melody"', 'sans-serif'],
      },
      screens: {
        'xxl': '1368px',
      },
       colors: {
         primary: '#FFC738',
         secondary: '#132E0A',
         tertiary: '#F5F5F5',
         quaternary: '#000000',
         quinary: '#000000',
         senary: '#000000',
      },
    },
  },
  plugins: [],
};
