import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

import { withTV } from 'tailwind-variants/transformer';

// import TailwindTypo from '@tailwindcss/typography';
// import TailwindAnimate from 'tailwindcss-animated';

import { generateScreens } from './utils/generate-tailwind-screens';

//prettier-  "plugins": ["prettier-plugin-tailwindcss"],

console.log('tailwind confgig');

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

      backgroundImage: {
        star: "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20281%20281%22%3E%3Cpath%20d%3D%22M%20140.5%2013.417%20L%20181.792%2097.083%20L%20274.123%20110.5%20L%20207.312%20175.625%20L%20223.084%20267.583%20L%20140.5%20224.167%20L%2057.916%20267.583%20L%2073.688%20175.625%20L%206.877%20110.5%20L%2099.208%2097.083%20Z%22%20fill%3D%22rgb(255%2C%200%2C%200)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')"
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
          from: { transform: 'scale(0.6)', opacity: '0' },

          '60%': { transform: 'scale(1.1)' },

          '100%': { transform: 'scale(1)', opacity: '1' }
        },

        'music-pulse': {
          from: { transform: 'scale(1)' },

          '50%': { transform: 'scale(1.15)' },

          to: { transform: 'scale(1)' }
        },

        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' }
        }
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        wave: 'wave 750ms ease  infinite',
        'music-pulse': 'music-pulse 600ms ease infinite',
        pop: 'pop 600ms cubic-bezier(0.4, 0, 0.2, 1)'
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

    require('tailwindcss-animated')
  ]
};

export default withTV(config);
