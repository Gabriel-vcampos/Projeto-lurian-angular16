/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
        colors: {
            clifford: '#da373d',
            hd: '#C4C4C4',
            btn: '#133143'
        },
        spacing: {
            'formw': '404px',
            'formanunc': '620px',
            'card': '700px'
        },
        
        backgroundPosition: {
            'bottom-4': 'right 10rem'
        },
        fontFamily: {
            teste: ['Open Sans', 'sans-serif'],
            form: ['DM Serif Display'],
            manequim: ['Alegreya Sans SC'],
            einstein: ['Albert Sans'],
            sans : ['Inter', 'ui-sans-serif', 'system-ui'],
        },
    boxShadow: {
      'custom': '0px 2px 8px rgba(0, 0, 0, 0.6)',
        },
        screens: {
        'lg2': '930px', // Breakpoint específico para 930px
      },
},
  plugins: [],
}
}