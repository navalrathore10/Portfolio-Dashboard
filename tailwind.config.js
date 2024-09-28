export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue3: 'var(--b3-color)',
        lighte3: 'var(--le3-color)',
        dark17: 'var(--d17-color)',
        dark18: 'var(--d18-color)',
        dark19: 'var(--d19-color)',
        dark20: 'var(--d20-color)',
        dark24: 'var(--d24-color)',
        yellow3: 'var(--y3-color)',
        darkop10: 'var(--darkop10-color)',
        darkop20: 'var(--darkop20-color)',
        darkop40: 'var(--darkop40-color)',
        darkop60: 'var(--darkop60-color)',
        darkop80: 'var(--darkop80-color)',
        lightop10: 'var(--lightop10-color)',
        lightop20: 'var(--lightop20-color)',
        lightop40: 'var(--lightop40-color)',
        lightop60: 'var(--lightop60-color)',
        lightop80: 'var(--lightop80-color)',
        kavya: 'var(--kavya-color)'

        ,

        prim: 'var(--prim-color)',
        dark: 'var(--dark-color)'
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}