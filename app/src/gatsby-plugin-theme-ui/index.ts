import preset from '@rebass/preset';

// export default preset;

export default {
  ...preset,
  colors: {
    text: '#ffffff',
    background: '#000000',
    primary: '#448aff',
    secondary: '#005ecb',
    accent: '#484848',
    muted: '#212121',
    modes: {
      light: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
      },
    },
  },
};
