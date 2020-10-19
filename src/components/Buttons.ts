import styled from '@emotion/styled'
import { theme } from '../theme';

const ButtonBase = styled.button`
  font-size: ${theme.typography.paragarph};
  padding: ${theme.spacing[2]} ${theme.spacing[5]};
  border-radius: ${theme.corner.radius};
  font-family: inherit;
  transition: background-color .2s;
  border: none;
  cursor: pointer;
`;

const PrimaryButton = styled(ButtonBase)`
  color: ${theme.colors.textInverted};
  background: ${theme.colors.primary[500]};

  &:hover {
    background: ${theme.colors.primary[400]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 ${theme.corner.size} ${theme.colors.primary[700]};
  }

  &:active {
    background: ${theme.colors.primary[600]};
  }

  &:disabled {
    cursor: default;
    background: ${theme.colors.primary[200]};
  }
`;

const SecondaryButton = styled(ButtonBase)`
  color: ${theme.colors.textInverted};
  background: ${theme.colors.secondary[500]};

  &:hover {
    background: ${theme.colors.secondary[400]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 ${theme.corner.size} ${theme.colors.secondary[700]};
  }

  &:active {
    background: ${theme.colors.secondary[600]};
  }

  &:disabled {
    cursor: default;
    background: ${theme.colors.secondary[200]};
  }
`;

export { PrimaryButton, SecondaryButton };