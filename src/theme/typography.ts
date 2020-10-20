import { css } from '@emotion/core'

const typography = {
  baseSize: '18px',
  baseFont: '"Lato", sans-serif',
  heading1: '3.157rem',
  heading2: '2.369rem',
  heading3: '1.777rem',
  heading4: '1.333rem',
  paragarph: '1rem',
  copyright: '0.75rem',
}

const baseFontStyles = css`
  font-family: inherit;
`;

const paragraphStyles = css`
  ${baseFontStyles}
  font-size: ${typography.paragarph};
  line-height: 27px;
`;

const heading4Styles = css`
  ${baseFontStyles}
  font-size: ${typography.heading4};
  line-height: 37.5px;
`;

export { typography, paragraphStyles, heading4Styles };