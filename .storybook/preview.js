import React from 'react';
import { GlobalStyle } from '../src/components/GlobalStyle'

export const decorators = [
  Story => (
    <React.Fragment>
      <GlobalStyle />
      <Story />
    </React.Fragment>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};
