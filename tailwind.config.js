const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: '',
    experimental: {
        images: {
            allowFutureImage: true,
        },
    },
    content: ['./src/**/*.{js,jsx}'],
    theme: {
        screens: {
            xs: '320px',
            sm: '768px',
            md: '960px',
            lg: '1024px',
            xl: '1440px',
            '2xl': '1536px',
            '3xl': '1600px',
            '4xl': '1920px',
            '5xl': '2560px',
        },
        fontSize: {
            xs: ['0.75rem', { lineHeight: '1rem' }],
            sm: ['0.875rem', { lineHeight: '1.5rem' }],
            base: ['1rem', { lineHeight: '1.75rem' }],
            lg: ['1.125rem', { lineHeight: '2rem' }],
            xl: ['1.25rem', { lineHeight: '2rem' }],
            '2xl': ['1.5rem', { lineHeight: '2rem' }],
            '3xl': ['2rem', { lineHeight: '2.5rem' }],
            '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
            '5xl': ['3rem', { lineHeight: '3.5rem' }],
            '6xl': ['3.75rem', { lineHeight: '1' }],
            '7xl': ['4.5rem', { lineHeight: '1.1' }],
            '8xl': ['6rem', { lineHeight: '1' }],
            '9xl': ['8rem', { lineHeight: '1' }],
        },
        extend: {
            colors: {
                primary: '#CF2231',
                primaryHover: '#a8153a',
                primaryHoverText: '#870021',
                mainText: '#2B2B2B',
                guideBack: '#040D36',
                grayText: '#7a7a7a',
                white: '#fff',
                warning: '#E7760C',
                success: '#0C8438',
                link: '#4054B2',
                menu: '#555',
                border: '#54595f',
                slateText: '#aaaaaa',
                grayBack: '#f7f7f7',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                display: ['Lexend', ...defaultTheme.fontFamily.sans],
                roboto: ['Roboto', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            maxWidth: {
                '2xl': '40rem',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
