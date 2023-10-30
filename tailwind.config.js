/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#343146',
          balck: {
            DEFAULT: '#343146',
            100: '#353535',
            200: '#1E1E1E',
          },
          gray: {
            DEFAULT: '#D9D9D9',
            300: '#666666',
          },
          gren: {
            100: '#70dd00',
            200: '#509a45',
            500: '#A5A6A9',
          },
        },
      },
      maxWidth: {
        base: '100rem',
      },
      screens: {
        xxl: '90rem',
      },
      spacing: {
        15: '60px',
        25: '100px',
      },
      fontFamily: {
        popins: 'var(--font-poppins)',
        'source-pro': 'var(--font-source-code)',
        luckiest: 'var(--font-luckiest)',
        montserrat: 'Montserrat',
      },
      fontSize: {
        'display-2xl': ['56px', '66px'],
        'display-xl': ['22px'],
      },
      letterSpacing: {
        tighter: '-0.05rem',
      },
      backgroundImage: {
        testimonials: "url('/assets/images/bg/bg-testimonials.svg')",
        'how-it-works-bg': "url('/assets/images/bg/bg-how-it-works.svg')",
        'footer-bg': "url('/assets/images/bg/bg-footer.svg')",
        'btn-gr': 'linear-gradient(161deg, #509A45 0%, #70DD00 100%)',
        'btn-gr-reverse': 'linear-gradient(-161deg, #509A45 0%, #70DD00 100%)',
      },
      boxShadow: {
        nav: '0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
        card: '10px 7px 17px 2px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
