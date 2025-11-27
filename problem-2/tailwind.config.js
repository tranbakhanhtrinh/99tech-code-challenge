/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-white-100': '#F1F4F5',
        'dark-blue': '#3D477A',
        'list-hover': 'rgb(240, 240, 240)',
        backdrop: 'rgba(0,0,0,0.5)',
        'exchange-input': '#2b3139'
      }
    }
  },
  plugins: []
}

