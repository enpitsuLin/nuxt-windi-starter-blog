import { defineConfig } from 'windicss/helpers';
import defaultTheme from 'windicss/defaultTheme';
import colors from 'windicss/colors';
import forms from 'windicss/plugin/forms'; 

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem'
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        ...colors,
        primary: '#00DC82',
        gray: colors.neutral //'#18181B'
      },
    }
  },
  plugins: [forms]
});
