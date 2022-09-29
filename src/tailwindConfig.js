module.exports = {
  content: ['./node_modules/@eslovensko/idsk-react/dist/components/**/*.js'],
  theme: {
    fontFamily: {
      serif: ['Source Sans Pro', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      blue: {
        100: '#EFF5FE',
        200: '#C3D9F9',
        300: '#88B3F6',
        400: '#126DFF',
        500: '#0B4199',
        600: '#072C66'
      },
      green: {
        100: '#F4F4EC',
        200: '#D5D6A2',
        300: '#B4B764',
        400: '#727B0F',
        500: '#444A09',
        600: '#2E3106'
      },
      turquoise: {
        100: '#EDF5F3',
        200: '#A9D9CD',
        300: '#71BDAB',
        400: '#1E856D',
        500: '#125041',
        600: '#06372C'
      },
      purple: {
        100: '#F7F0FF',
        200: '#E0C5FF',
        300: '#C79AFF',
        400: '#9544FF',
        500: '#592999',
        600: '#3C1B66'
      },
      pink: {
        100: '#FBEBFB',
        200: '#F0AAEF',
        300: '#E56FE3',
        400: '#CF06C8',
        500: '#7C0478',
        600: '#530250'
      },
      neutral: {
        90: '#FAFAFA',
        100: '#F5F5F5',
        200: '#EEEEEE',
        300: '#E0E0E0',
        400: '#BDBDBD',
        500: '#9E9E9E',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121'
      },

      get 'alert-basic'() {
        return this.blue[400];
      },
      get 'alert-basic-dark'() {
        return this.blue[600];
      },
      get 'alert-basic-medium'() {
        return this.blue[200];
      },
      get 'alert-basic-light'() {
        return this.blue[100];
      },

      'alert-warning': '#C3112B',
      'alert-warning-dark': '#4E0711',
      'alert-warning-medium': '#F8B5B9',
      'alert-warning-light': '#FBEEF0',

      'alert-positive': '#078814',
      'alert-positive-dark': '#033608',
      'alert-positive-medium': '#9FDAA5',
      'alert-positive-light': '#EBF5EC',

      'alert-attention': '#BD730C',
      'alert-attention-dark': '#4E2A00',
      'alert-attention-medium': '#EBCFAA',
      'alert-attention-light': '#FAF4EC',

      'focus-state': '#E06E00',

      get primary() {
        return this.blue[400];
      },
      get 'primary-dark'() {
        return this.blue[600];
      }
    },
    screens: {
      mb: '375px',
      tb1: '520px',
      tb2: '730px',
      dm1: '1120px',
      dm2: '1440px',
      dl: '1530px'
    },

    extend: {
      boxShadow: {
        large: '0px 24px 40px rgba(26, 26, 26, 0.16)',
        medium: '0px 12px 32px rgba(26, 26, 26, 0.24)',
        small: '0px 4px 8px rgba(26, 26, 26, 0.2)',
        dialog: '0px -8px 44px -10px rgba(0, 0, 0, 0.25)',
        divider: '0px 10px 20px -10px rgba(26, 26, 26, 0.2)',
        border: '0px 0px 0px 4px rgba(26, 26, 26, 0.2)'
      }
    }
  },
  safelist: [
    'caption',
    'hidden',
    'link-caption',
    'link-l',
    'link-m',
    'link-s',
    'rotate-180',
    'sticky',
    'subtitle',
    'text-body',
    'text-body-1',
    'text-button',
    'w-full',
    'page-content',
    'page-content-public'
  ],
  plugins: []
};
