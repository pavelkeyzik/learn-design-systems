import { css } from '@emotion/core';
import { spacing } from './spacing';

const typography = {
  baseSize: '18px',
  baseFont: '"Lato", sans-serif',
  heading1: '3.052rem',
  heading2: '2.441rem',
  heading3: '1.953rem',
  heading4: '1.563rem',
  heading5: '1.25rem',
  paragarph: '1rem',
  copyright: '0.75rem',
};

const baseFontStyles = css`
  font-family: inherit;
  margin: 0;
  padding: 0;
`;

const paragraphStyles = css`
  ${baseFontStyles}
  font-size: ${typography.paragarph};
  line-height: 27px;
`;

const heading1Styles = css`
  ${baseFontStyles}
  font-size: ${typography.heading1};
  line-height: 73.2px;
  margin-top: ${spacing[5]};
  // TODO: Add margin-bottom if needed and specify sizes of margins in Figma
`;

const heading2Styles = css`
  ${baseFontStyles}
  font-size: ${typography.heading2};
  line-height: 58.6px;
  margin-top: ${spacing[4]};
  margin-bottom: ${spacing[3]};
  // TODO: specify sizes of margins in Figma
`;

const heading3Styles = css`
  ${baseFontStyles}
  font-size: ${typography.heading3};
  line-height: 46.9px;
  margin-top: ${spacing[3]};
  // TODO: Add margin-bottom if needed and specify sizes of margins in Figma
`;

const heading4Styles = css`
  ${baseFontStyles}
  font-size: ${typography.heading4};
  line-height: 37.5px;
  margin-top: ${spacing[2]};
  // TODO: Add margin-bottom if needed and specify sizes of margins in Figma
`;

const heading5Styles = css`
  ${baseFontStyles}
  font-size: ${typography.heading5};
  line-height: 30px;
  margin-top: ${spacing[1]};
  // TODO: Add margin-bottom if needed and specify sizes of margins in Figma
`;

export {
  typography,
  paragraphStyles,
  heading1Styles,
  heading2Styles,
  heading3Styles,
  heading4Styles,
  heading5Styles,
};
