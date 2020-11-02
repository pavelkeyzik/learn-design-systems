import React from 'react';
import { GlobalStyle } from '../src/components/GlobalStyle';
import { ThemeProvider } from '../src/components/ThemeProvider';

export const decorators = [
  (Story) => (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </React.Fragment>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};
