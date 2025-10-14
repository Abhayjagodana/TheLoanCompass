// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",

    
//   ],
//   theme: {
//     extend: {
      
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Prevent custom animation classes from being purged in production
    'animate-slide-right',
    'delay-300',
    'delay-700',
  ],
  theme: {
    extend: {
      keyframes: {
        // Custom animation for your sliding sections
        'slide-right': {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        // Example of your slow spin animation
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'slide-right': 'slide-right 1s ease-out forwards',
        'spin-slow': 'spin-slow 2s linear infinite',
      },
      colors: {
        'brand-green': '#064E3B', // optional custom color for consistent theming
      },
    },
  },
  plugins: [],
};

