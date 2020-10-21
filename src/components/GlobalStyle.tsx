import React from 'react';
import { css, Global } from '@emotion/core';
import { theme } from '../theme';

const globalStyles = css`
  body {
    background-color: ${theme.colors.neutral[200]};
    font-family: ${theme.typography.baseFont};
    font-size: ${theme.typography.baseSize};
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: ${theme.colors.secondary[800]};
  }

  img {
    vertical-align: middle;
  }
`;

function GlobalStyle() {
  return <Global styles={globalStyles} />;
}

export { GlobalStyle };
