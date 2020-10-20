import styled from '@emotion/styled';
import {
  heading1Styles,
  heading2Styles,
  heading3Styles,
  heading4Styles,
  heading5Styles,
  paragraphStyles,
} from '../theme/typography';

const H1 = styled.h1`
  ${heading1Styles}
`;

const H2 = styled.h2`
  ${heading2Styles}
`;

const H3 = styled.h3`
  ${heading3Styles}
`;

const H4 = styled.h4`
  ${heading4Styles}
`;

const H5 = styled.h5`
  ${heading5Styles}
`;

const P = styled.p`
  ${paragraphStyles}
`;

export { H1, H2, H3, H4, H5, P };
