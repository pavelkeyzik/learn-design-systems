import styled from '@emotion/styled';
import { space, SpaceProps } from 'styled-system';
import {
  heading1Styles,
  heading2Styles,
  heading3Styles,
  heading4Styles,
  heading5Styles,
  paragraphStyles,
} from '../theme/typography';

const H1 = styled.h1<SpaceProps>`
  ${heading1Styles}
  ${space}
`;

const H2 = styled.h2<SpaceProps>`
  ${heading2Styles}
  ${space}
`;

const H3 = styled.h3<SpaceProps>`
  ${heading3Styles}
  ${space}
`;

const H4 = styled.h4<SpaceProps>`
  ${heading4Styles}
  ${space}
`;

const H5 = styled.h5<SpaceProps>`
  ${heading5Styles}
  ${space}
`;

const P = styled.p<SpaceProps>`
  ${paragraphStyles}
  ${space}
`;

export { H1, H2, H3, H4, H5, P };
