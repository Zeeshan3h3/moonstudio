/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{jsx,js}'],
    theme: {
        extend: {
            colors: {
                'dark': '#FFFFFF',
                'dark-card': '#FFFFFF',
                'dark-sec': '#FAF9F6',
                'gold': '#D4AF37',
                'gold-dark': '#C5A028',
                'gold-light': '#E6C97A',
                'cream': '#1A1A1A',
                'gray-soft': '#666666',
                'gray-light': '#EAEAEA',
            },
            fontFamily: {
                display: ['Playfair Display', 'serif'],
                heading: ['Playfair Display', 'serif'],
                ui: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-up': 'fadeUp 0.8s ease forwards',
                'shimmer': 'shimmer 2.5s infinite',
                'float': 'float 3s ease-in-out infinite',
                'marquee': 'marquee 30s linear infinite',
                'pulse-gold': 'pulseGold 2s ease-in-out infinite',
                'bounce-slow': 'bounce 2s infinite',
                'star-shoot': 'starShoot 4s linear infinite',
                'line-expand': 'lineExpand 1s ease forwards',
                'count-up': 'countUp 2s ease forwards',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                pulseGold: {
                    '0%, 100%': { boxShadow: '0 0 10px rgba(212,175,55,0.2)' },
                    '50%': { boxShadow: '0 0 30px rgba(212,175,55,0.5)' },
                },
                starShoot: {
                    '0%': { transform: 'translateX(-100px) translateY(0)', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { transform: 'translateX(calc(100vw + 100px)) translateY(-60px)', opacity: '0' },
                },
                lineExpand: {
                    '0%': { width: '0%' },
                    '100%': { width: '100%' },
                },
            },
            backgroundImage: {
                'gold-gradient': 'linear-gradient(135deg, #D4AF37, #F7E7A1)',
                'gold-gradient-hover': 'linear-gradient(135deg, #C5A028, #E6C97A)',
                'dark-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #FAF9F6 100%)',
                'hero-overlay': 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 60%, #FFFFFF 100%)',
                'card-overlay': 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.9) 60%, #FFFFFF 100%)',
                'shimmer-gold': 'linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)',
            },
            backdropBlur: { 'xs': '2px' },
            transitionDuration: { '400': '400ms' },
        },
    },
    plugins: [],
}
