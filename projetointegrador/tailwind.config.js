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
            'teste': ['Open Sans'],
            'form': ['DM Serif Display'],
    },
    }
},
  plugins: [],
}