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
        'xxl': '1380px',
        'custom-1': '1380px',
        'custom-2': '1234px',
        'custom-4': '813px',
        'custom-5': '768px',
        'custom-6': '0px',
      },
      colors: {
        primary: '#FFC738',
        secondary: '#132E0A',
        tertiary: '#F5F5F5',
        'purple-custom': '#e4ddfd',
        'purple-custom-2': '#8c3bf3',
        'white-green': '#f0fdf4',
        'custom-green': '#132e0a',
        'custom-green-2': '#179c48',
        'custom-white-orange': '#fce7e2',
        'white-orange': '#fce7e2',
        'custom-yellow': '#ffcd4f',
        'custom-white': '#f5f5f5',
        'custom-purple-light': '#a96cf6',
        'custom-orange': '#df2800',
        'custom-orange-light': '#f7502b',
        'custom-white-2': '#b7bbbe',
        'custom-blue': '#374151',
        'white-2': '#b7bbbe',


      },

      boxShadow: {
        'custom-1': '7.956px 7.956px 15.913px 0px rgba(36, 27, 5, 0.15)',
        'custom-purple-light': '7.956px 7.956px 15.913px 0px rgba(36, 27, 5, 0.15)',
        'custom-2': '7.956px 7.956px 15.913px 0px rgba(36, 27, 5, 0.15)',
      }
  },
},
  plugins: [],
};
