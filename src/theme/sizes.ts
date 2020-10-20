import { css } from '@emotion/core';
import { spacing } from './spacing';

const sizes = {
  largeScreen: '1360px',
};

const centerContainerStyles = css`
  margin: 0 auto;
  width: 100%;
  max-width: ${sizes.largeScreen};
  padding: 0 ${spacing[6]};
`;

export { sizes, centerContainerStyles };
