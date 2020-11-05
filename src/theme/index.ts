import { colors } from './colors';
import { corner } from './corner';
import { sizes } from './sizes';
import { spacing } from './spacing';
import { typography } from './typography';

const theme = {
  colors,
  corner,
  sizes,
  spacing,
  typography,
};

type StyledSystemTheme = typeof theme;

export type { StyledSystemTheme };
export { theme };
