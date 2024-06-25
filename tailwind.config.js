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
        'custom-black': '#00B09A',
        'purple-custom': '#e4ddfd',
        'purple-custom-2': '#8c3bf3',
        'white-green': '#f0fdf4',
        'custom-green': '#132e0a',
        'custom-green-2': '#179c48',
        'custom-green-3': '#17CCB6',
        'custom-green-4': '#179C48',
        'custom-white-orange': '#fce7e2',
        'white-orange': '#fce7e2',
        'custom-yellow': '#ffcd4f',
        'custom-yellow-2': '#FFFBEB',
        'custom-yellow-3': '#FFE4A0',
        'custom-yellow-4': '#CFA12D',
        'custom-white': '#f5f5f5',
        'custom-purple-light': '#a96cf6',
        'custom-orange': '#df2800',
        'custom-orange-light': '#f7502b',
        'custom-white-2': '#b7bbbe',
        'custom-white-3': '#e9e9e9',
        'custom-blue': '#374151',
        'white-2': '#b7bbbe',
        "custom-gray": '#22C55E',
        "custom-gray-2": '#64748B',
        "custom-gray-3": '#BBF7D0',
        "custom-gray-4": '#F8FAFC',
        "custom-gray-5": '#E2E8F0',
        'custom-red':'#F7502B',
      },

      boxShadow: {
        'custom-1': '7.956px 7.956px 15.913px 0px rgba(36, 27, 5, 0.15)',
        'custom-2': '0px 1.46px 2.93px -1.46px #0000001A, 0px 1.46px 4.39px 0px #0000001A',
        'custom-purple-light': '7.956px 7.956px 15.913px 0px rgba(36, 27, 5, 0.15)',
      }
    },
  },
  plugins: [],
};
