import React from 'react';
import { ThemeProvider as ThemeProviderBase } from 'emotion-theming';
import { theme } from '../theme';

type ThemeProviderProps = {
  children?: React.ReactNode;
};

function ThemeProvider(props: ThemeProviderProps) {
  return <ThemeProviderBase theme={theme}>{props.children}</ThemeProviderBase>;
}

export { ThemeProvider };
