import 'styled-componts';

import { Color } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
  }
}
