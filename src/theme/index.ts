import { RequiredTheme } from 'styled-system';
import { colors } from './colors';
import { corner } from './corner';
import { sizes } from './sizes';
import { spacing } from './spacing';
import { typography } from './typography';

// TODO: Remove Pick when all values from RequiredTheme will be defined
type StyledSystemTheme = Pick<RequiredTheme, 'space'>;

const styledSystemTheme: StyledSystemTheme = {
  space: [0, 4, 8, 16, 24, 32, 40],
};

const theme = {
  colors,
  corner,
  sizes,
  spacing,
  typography,
  styledSystemTheme,
};

export type { StyledSystemTheme };
export { theme };
