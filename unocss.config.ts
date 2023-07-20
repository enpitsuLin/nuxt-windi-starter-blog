import {
  defineConfig,
  mergeDeep, presetAttributify, presetIcons, presetTypography,
  presetUno, transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import {
  colors,
  theme as defaultTheme,
} from 'unocss/preset-mini'

export default defineConfig({
  shortcuts: {
    'nav-button': [
      'text-sm lg:text-base rounded leading-5 px-4 py-2 font-medium text-gray-600 dark:text-gray-300 focus:(dark:text-gray-50 text-gray-900)',
      'hover:(dark:(text-gray-50 bg-gray-900) text-gray-900 bg-gray-100)',
      '[&.active]:(bg-gray-100 dark:bg-gray-900 shadow-[inset_0_2px_4px_0_rgb(0_0_0/5%)])',
    ].join(' '),
    'tag-link': 'bg-slate-100 dark:bg-neutral-700 rounded-full mt-2 mr-4 text-xs py-1 px-3 uppercase no-underline',
  },
  extendTheme: [
    (theme) => {
      return mergeDeep(theme, {
        lineHeight: {
          11: '2.75rem',
          12: '3rem',
          13: '3.25rem',
          14: '3.5rem',
        },
        fontFamily: {
          sans: ['Inter', ...defaultTheme.fontFamily.sans],
        },
        colors: {
          primary: {
            50: '#ccf8e6',
            100: '#9ff2d0',
            200: '#71ecba',
            300: '#44e5a3',
            400: '#17df8d',
            500: '#00dc82',
            600: '#00a15f',
            700: '#007a48',
            800: '#005331',
            900: '#002c1a',
          },
          secondary: colors.zinc,
          green: {
            50: '#E8FFF6',
            100: '#ACFFDD',
            200: '#73FFC6',
            300: '#39FFAE',
            400: '#00DC82',
            500: '#00BD6F',
            600: '#009D5D',
            700: '#007E4A',
            800: '#005E38',
            900: '#005233',
          },
          yellow: {
            50: '#FDF6DB',
            100: '#FCEDB7',
            200: '#FFE896',
            300: '#FFE072',
            400: '#F7D14C',
            500: '#F5C828',
            600: '#DAAC0A',
            700: '#A38108',
            800: '#6D5605',
            900: '#362B03',
          },
          gray: colors.zinc,
        },
      })
    },
  ],
  presets: [presetUno(), presetAttributify(), presetIcons(), presetTypography()],
  transformers: [transformerVariantGroup(), transformerDirectives()],
})
