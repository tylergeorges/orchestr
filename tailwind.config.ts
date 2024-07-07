import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

import { withTV } from 'tailwind-variants/transformer';
import TailwindRadix from 'tailwindcss-radix';
import TailwindAnimated from 'tailwindcss-animated';
import { generateScreens } from './utils/generate-tailwind-screens';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },

    screens: {
      ...generateScreens({ sm: 640, md: 768, lg: 1024, xl: 1280 })
    },

    extend: {
      colors: {
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',

        brand: {
          DEFAULT: colors.emerald[500],
          foreground: 'hsl(var(--background) / <alpha-value>)'
        },

        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
        },

        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
        },

        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
        },

        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
        },

        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
        },

        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
        },

        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
        }
      },

      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)'
      },

      fontSize: {
        '2xs': [
          '0.65rem',
          {
            lineHeight: '1'
          }
        ],

        '3xs': [
          '0.55rem',
          {
            lineHeight: '1'
          }
        ]
      },

      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...fontFamily.mono]
      },

      keyframes: {
        wave: {
          '0%': { transform: 'scaleY(0.6)' },
          '50%': { transform: 'scaleY(1.1)' },
          '100%': { transform: 'scaleY(0.6)' }
        },

        pop: {
          from: { transform: 'scale(0.6)' },

          '60%': { transform: 'scale(1.1)' },

          '100%': { transform: 'scale(1)' }
        },

        'music-pulse': {
          from: { transform: 'scale(1)' },

          '50%': { transform: 'scale(1.15)' },

          to: { transform: 'scale(1)' }
        },

        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' }
        },

        fadeIn: {
          from: { transform: 'scale(0.90)', opacity: '0' },
          to: { transform: 'initial', opacity: '1' }
        },

        modalFadeIn: {
          from: { transform: 'scale(0.95)', opacity: '0' }
          // "100%": { transform: "scale(1)", opacity: "1" }
        },

        fadeUp: {
          from: { transform: 'translate3d(0,70px,0)', opacity: '0' },
          to: { transform: 'translate3d(0,0,0)', opacity: '1' }
        },

        // Dropdown menu
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },

        'slide-down': {
          '0%': { opacity: '1', transform: 'translateY(-10px)' },
          '100%': { opacity: '0', transform: 'translateY(0px)' }
        },

        'slide-up': {
          '0%': { opacity: '1', transform: 'translateY(-10px)' },
          '100%': { opacity: '0', transform: 'translateY(0)' }
        },

        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },

        'slide-left': {
          '0%': { opacity: '0', transform: 'translateX(10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },

        // Tooltip
        'slide-up-fade': {
          '0%': { opacity: '0', transform: 'translateY(2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },

        'slide-right-fade': {
          '0%': { opacity: '0', transform: 'translateX(-2px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },

        'slide-down-fade': {
          '0%': { opacity: '0', transform: 'translateY(-2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },

        'slide-left-fade': {
          '0%': { opacity: '0', transform: 'translateX(2px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },

        // Navigation menu
        'enter-from-right': {
          '0%': { transform: 'translateX(200px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },

        'enter-from-left': {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },

        'exit-to-right': {
          '0%': { opacity: '0', transform: 'translateX(0)' },
          '100%': { opacity: '1', transform: 'translateX(10px)' }
        },

        'exit-to-left': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-10px)', opacity: '0' }
        },

        'scale-in-content': {
          '0%': { transform: 'rotateX(-30deg) scale(0.9)', opacity: '0' },
          '100%': { transform: 'rotateX(0deg) scale(1)', opacity: '1' }
        },

        'scale-out-content': {
          '0%': { transform: 'rotateX(0deg) scale(1)', opacity: '1' },
          '100%': { transform: 'rotateX(-10deg) scale(0.95)', opacity: '0' }
        },

        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },

        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },

        // Toast
        'toast-hide': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },

        'toast-slide-in-right': {
          '0%': { transform: `translateX(calc(100% + 1rem))` },
          '100%': { transform: 'translateX(0)' }
        },
        'toast-slide-in-bottom': {
          '0%': { transform: `translateY(calc(100% + 1rem))` },
          '100%': { transform: 'translateY(0)' }
        },
        'toast-swipe-out-x': {
          '0%': { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          '100%': {
            transform: `translateX(calc(100% + 1rem))`
          }
        },
        'toast-swipe-out-y': {
          '0%': { transform: 'translateY(var(--radix-toast-swipe-end-y))' },
          '100%': {
            transform: `translateY(calc(100% + 1rem))`
          }
        }
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        wave: 'wave 750ms ease  infinite',
        'music-pulse': 'music-pulse 600ms ease infinite',
        pop: 'pop 600ms cubic-bezier(0.4, 0, 0.2, 1)',

        fadeIn: 'fadeIn 500ms',
        fadeUp: 'fadeUp 1.5s',
        modalFadeIn: 'modalFadeIn 200ms+',

        // Dropdown menu
        'scale-in': 'scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right': 'slide-right 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left': 'slide-left 0.6s cubic-bezier(0.16, 1, 0.3, 1)',

        // Tooltip
        'slide-up-fade': 'slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-fade': 'slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-fade': 'slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',

        // Navigation menu
        'enter-from-right': 'enter-from-right 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'enter-from-left': 'enter-from-left  0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'exit-to-right': 'exit-to-right 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'exit-to-left': 'exit-to-left 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in-content': 'scale-in-content 0.2s ease',
        'scale-out-content': 'scale-out-content 0.2s ease',
        'fade-in': 'fade-in 0.2s ease',
        'fade-out': 'fade-out 0.2s ease',

        // Toast
        'toast-hide': 'toast-hide 100ms ease-in forwards',
        'toast-slide-in-right': 'toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'toast-slide-in-bottom': 'toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'toast-swipe-out-x': 'toast-swipe-out-x 100ms ease-out forwards',
        'toast-swipe-out-y': 'toast-swipe-out-y 100ms ease-out forwards'
      }
    }
  },

  plugins: [
    // TailwindTypo,

    plugin(function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
      addVariant('child-group-hover', '& > *:group-hover');
    }),

    plugin(function ({ addUtilities }) {
      addUtilities({
        '.horizontal': {
          display: 'flex',
          flexDirection: 'row'
        },

        '.horizontal.center-v': {
          alignItems: 'center'
        },

        '.horizontal.center-h': {
          justifyContent: 'center'
        },

        '.horizontal.center': {
          justifyContent: 'center',
          alignItems: 'center'
        },

        '.vertical': {
          display: 'flex',
          flexDirection: 'column'
        },

        '.vertical.center-v': {
          justifyContent: 'center'
        },

        '.vertical.center-h': {
          alignItems: 'center'
        },

        '.vertical.center': {
          justifyContent: 'center',
          alignItems: 'center'
        },

        '.space-between': {
          justifyContent: 'space-between'
        }
      });
    }),

    TailwindRadix({
      variantPrefix: 'rdx'
    }), // Initialize with default values (see options below),

    TailwindAnimated,

    require('tailwindcss-animated')
  ]
};

export default withTV(config);
