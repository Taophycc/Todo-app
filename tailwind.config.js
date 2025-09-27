/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        // Primary
        'bright-blue': 'hsl(220, 98%, 61%)',
        'check-start': 'hsl(192, 100%, 67%)',
        'check-end': 'hsl(280, 87%, 65%)',
        
        // Light Theme (exact from style guide)
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'very-light-grayish-blue': 'hsl(234, 39%, 85%)',
        'light-grayish-blue': 'hsl(233, 11%, 84%)',
        'dark-grayish-blue': 'hsl(236, 9%, 61%)',
        'very-dark-grayish-blue': 'hsl(235, 19%, 35%)',
        
        // Dark Theme (exact from style guide)
        'very-dark-blue': 'hsl(235, 21%, 11%)',
        'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
        'light-grayish-blue-dark': 'hsl(234, 39%, 85%)',
        'light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
        'dark-grayish-blue-dark': 'hsl(235, 16%, 43%)',
        'very-dark-grayish-blue-dark': 'hsl(233, 14%, 35%)',
        'very-dark-grayish-blue-darker': 'hsl(237, 14%, 26%)',
      },
      gradientColorStops: {
        'check-start': 'hsl(192, 100%, 67%)',
        'check-end': 'hsl(280, 87%, 65%)',
      },
      backgroundImage: {
        'desktop-light': "url('/images/bg-desktop-light.jpg')",
        'desktop-dark': "url('/images/bg-desktop-dark.jpg')",
        'mobile-light': "url('/images/bg-mobile-light.jpg')",
        'mobile-dark': "url('/images/bg-mobile-dark.jpg')",
      },
      fontSize: {
        'body': ['18px', { lineHeight: '1.4' }],
      }
    },
  },
  plugins: [],
}