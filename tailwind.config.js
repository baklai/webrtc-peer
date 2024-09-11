/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      colors: {
        'black-soft': 'var(--vt-c-black-soft)',

        'primary-50': 'hsla(160, 100%, 37%, 1)',
        'primary-100': 'hsla(160, 100%, 37%, 0.9)',
        'primary-200': 'hsla(160, 100%, 37%, 0.8)',
        'primary-300': 'hsla(160, 100%, 37%, 0.7)',
        'primary-400': 'hsla(160, 100%, 37%, 0.6)',
        'primary-500': 'hsla(160, 100%, 37%, 0.5)',
        'primary-600': 'hsla(160, 100%, 37%, 0.4)',
        'primary-700': 'hsla(160, 100%, 37%, 0.3)',
        'primary-800': 'hsla(160, 100%, 37%, 0.2)',
        'primary-900': 'hsla(160, 100%, 37%, 0.1)'
      }
    }
  },
  plugins: []
};
