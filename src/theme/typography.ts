import { css } from '@emotion/core';

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
`;

const heading2Styles = css`
  ${baseFontStyles}
  font-size: ${typography.heading2};
  line-height: 58.6px;
`;

const heading3Styles = css`
  ${baseFontStyles}
  font-size: ${typography.heading3};
  line-height: 46.9px;
`;

const heading4Styles = css`
  ${baseFontStyles}
  font-size: ${typography.heading4};
  line-height: 37.5px;
`;

const heading5Styles = css`
  ${baseFontStyles}
  font-size: ${typography.heading5};
  line-height: 30px;
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
