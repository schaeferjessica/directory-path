module.exports = { 
  content: ['./components/**/*.js', './pages/**/*.js'],  
  theme: {        
    extend: {
      colors: {
        'midnight': '#223956',
        'lavender': '#D3DAF2',
      },
      keyframes: {
        gradient: {
          '0%': { transform: 'translate3d(0%, 0%, 0)' },
          '50%': { transform: 'translate3d(-75%, 0%, 0)' },
          '100%': { transform: 'translate3d(0%, 0%, 0)' }, 
          }      
        }
    },  
    fontFamily: {
      sans: ['IBM Plex Sans', 'ui-sans-serif', 'sans-serif'],
      serif: ['ui-serif', 'serif'],
      mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
    },
  },  
  plugins: [],
}

// https://tailwindcss.com/docs/configuration#options