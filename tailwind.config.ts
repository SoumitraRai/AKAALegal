import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0c2444', // Richer navy blue
        accent: '#c9aa6e', // Refined gold
        secondary: '#8b1d1d', // Deep burgundy
        light: '#f9f7f2', // Softer ivory
        dark: '#1a1a1a',
        text: {
          DEFAULT: '#333333',
          light: '#666666',
          dark: '#1a1a1a',
        },
        border: '#e8e8e1',
        // Enhanced premium palette
        gold: {
          lightest: '#f5eede',
          lighter: '#eee2c9',
          light: '#e6d7b6',
          DEFAULT: '#c9aa6e',
          dark: '#a28a50',
          darker: '#8a7544',
          darkest: '#6e5d35',
        },
        navy: {
          lightest: '#e6ebf0',
          lighter: '#b2c2d3',
          light: '#1a395b',
          DEFAULT: '#0c2444',
          dark: '#071628',
          darker: '#050e1a',
          darkest: '#02060c',
        },
        cream: {
          lighter: '#fffdf7',
          light: '#fdfbf4',
          DEFAULT: '#f9f7f2',
          dark: '#f2efe9',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lora: ['Lora', 'serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      boxShadow: {
        sm: '0 5px 15px rgba(0,0,0,0.03)',
        md: '0 10px 25px rgba(0,0,0,0.08)',
        lg: '0 15px 35px rgba(0,0,0,0.12)',
        'gold': '0 5px 20px rgba(201, 170, 110, 0.15)',
        'gold-sm': '0 2px 8px rgba(201, 170, 110, 0.08)',
        'gold-lg': '0 8px 30px rgba(201, 170, 110, 0.18)',
        'navy': '0 5px 20px rgba(12, 36, 68, 0.15)',
        'inner-light': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.025)',
        'inner-gold': 'inset 0 2px 4px 0 rgba(201, 170, 110, 0.1)',
        'button': '0 4px 10px rgba(201, 170, 110, 0.2), 0 2px 6px rgba(0, 0, 0, 0.05)',
        'card': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
        'hover': '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(201, 170, 110, 0.15)',
      },
      borderRadius: {
        DEFAULT: '2px',
        'sm': '2px',
        'md': '4px',
        'lg': '6px',
        'xl': '8px',
      },
      transitionDuration: {
        DEFAULT: '300ms',
        '400': '400ms',
        '600': '600ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-diagonal': 'linear-gradient(45deg, var(--tw-gradient-stops))',
        'texture-light': "url('/assets/images/texture-light.png')",
        'marble-texture': "url('/assets/enhanced/marble-texture.jpg')",
        'gold-texture': "url('/assets/enhanced/gold-texture.jpg')",
        'subtle-pattern': "url('/assets/enhanced/subtle-pattern.jpg')",
        'dot-pattern': "url('/assets/enhanced/patterns/dot-pattern.svg')",
        'grid-pattern': "url('/assets/enhanced/patterns/subtle-grid.svg')",
        'diagonal-pattern': "url('/assets/enhanced/patterns/diagonal-lines.svg')",
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '5rem',
        '3xl': '8rem',
      },
      animation: {
        'fade-in-down': 'fadeInDown 1s ease forwards',
        'fade-in-up': 'fadeInUp 1s ease forwards',
        'fade-in': 'fadeIn 1.2s ease forwards',
        'slide-in-right': 'slideInRight 0.8s ease forwards',
        'slide-in-left': 'slideInLeft 0.8s ease forwards',
        'scale-in': 'scaleIn 0.5s ease forwards',
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      // Premium design specifics
      backdropBlur: {
        xs: '2px',
      },
      backgroundOpacity: {
        '15': '0.15',
        '85': '0.85',
        '95': '0.95',
      },
      zIndex: {
        '-1': '-1',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            lineHeight: '1.8',
            p: {
              marginBottom: '1.5em',
            },
            h2: {
              marginTop: '2em',
              marginBottom: '1em',
            },
            h3: {
              marginTop: '1.5em',
              marginBottom: '0.75em',
            },
          },
        },
      },
      listStyleType: {
        square: 'square',
        diamond: 'disclosure-closed',
      },
    },
  },
  plugins: [],
}

export default config
