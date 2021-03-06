import styled from '../styled';
import { space, SpaceProps } from 'styled-system';
import { paragraphStyles } from '../theme/typography';
import { css } from '@emotion/core';

const ButtonBase = styled.button<SpaceProps>`
  transition: background-color 0.2s;
  border: none;
  cursor: pointer;

  ${({ theme }) => css`
    padding: ${theme.spacing[2]} ${theme.spacing[5]};
    border-radius: ${theme.corner.radius};
  `}

  ${paragraphStyles}
  ${space}
`;

const PrimaryButton = styled(ButtonBase)`
  ${({ theme }) => css`
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
  `}
`;

const SecondaryButton = styled(ButtonBase)`
  ${({ theme }) => css`
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
  `}
`;

const TertiaryButton = styled(ButtonBase)`
  ${({ theme }) => css`
    color: ${theme.colors.primary[800]};
    background: ${theme.colors.primary[100]};

    &:hover {
      background: ${theme.colors.primary[400]};
      color: ${theme.colors.textInverted};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 ${theme.corner.size} ${theme.colors.primary[800]};
    }

    &:active {
      background: ${theme.colors.primary[600]};
      color: ${theme.colors.textInverted};
    }

    &:disabled {
      cursor: default;
      background: ${theme.colors.primary[200]};
      color: ${theme.colors.textInverted};
    }
  `}
`;

export { PrimaryButton, SecondaryButton, TertiaryButton };
