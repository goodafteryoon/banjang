import { DefaultTheme } from 'styled-components';

const color = {
  black: '#000',
  white: '#fff',
  disabled: '#c1c1c1',
  accent: '#f75a2f',
  highlight: 'rgba(247, 90, 47, 0.10)',
};

const theme: DefaultTheme = {
  color,
};

export default theme;

export type Color = typeof color;
