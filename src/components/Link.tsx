import styled from '../styled';
import { paragraphStyles } from '../theme/typography';

const Link = styled.a`
  ${paragraphStyles};
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primary[400]};

  &:hover {
    color: ${({ theme }) => theme.colors.primary[700]};
  }
`;

export { Link };
