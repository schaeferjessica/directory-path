module.exports = { 
  content: [    
    "./pages/**/*.{js,ts,jsx,tsx}",    
    "./styles/**/*.{js,ts,jsx,tsx}",  
  ],  
  theme: {        
    extend: {
      colors: {
        'midnight': '#223956',
        'lavender': '#D3DAF2',
      },
    },  
    fontFamily: {
      sans: ['ui-sans-serif', 'sans-serif'],
      serif: ['ui-serif', 'serif'],
      mono: ['ui-monospace', 'monospace'],
    },
  },  
  plugins: [],
}

// https://tailwindcss.com/docs/configuration#options