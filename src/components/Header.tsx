import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../theme';
import { css } from '@emotion/core';
import { heading4Styles, paragraphStyles } from '../theme/typography';
import { centerContainerStyles } from '../theme/sizes';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: ${theme.colors.textInverted};
`;

const HeaderCenter = styled.div`
  display: flex;
  ${centerContainerStyles}
`;

type HeaderItemProps = {
  full?: boolean;
};

const HeaderItem = styled.div<HeaderItemProps>`
  display: flex;
  align-items: center;

  ${({ full }) =>
    full &&
    css`
      flex: auto;
    `}
`;

const HeaderMenu = styled.nav`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: ${theme.spacing[4]};
  }
`;

const HeaderMenuItem = styled.a`
  color: ${theme.colors.text};
  ${paragraphStyles}
`;

type HeaderProps = {
  children?: React.ReactNode;
};

function Header(props: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderCenter>{props.children}</HeaderCenter>
    </HeaderContainer>
  );
}

const HeaderLogo = styled.a`
  text-decoration: none;
  color: ${theme.colors.neutral[400]};
  ${heading4Styles}

  :hover {
    color: ${theme.colors.neutral[500]};
  }
`;

const HeaderSocialMedia = styled.div`
  display: flex;
  align-items: center;
  // TODO: Move to a property like "ml" or something to be able easily
  // change position of this component
  margin-left: ${theme.spacing[6]};

  & > *:not(:last-child) {
    margin-right: ${theme.spacing[4]};
  }
`;

const HeaderSocialMediaItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  color: ${theme.colors.text};
  cursor: pointer;
  width: 32px;
  height: 32px;

  :hover {
    color: ${theme.colors.neutral[500]};
  }
`;

Header.Item = HeaderItem;
Header.Menu = HeaderMenu;
Header.MenuItem = HeaderMenuItem;
Header.Logo = HeaderLogo;
Header.SocialMedia = HeaderSocialMedia;
Header.SocialMediaItem = HeaderSocialMediaItem;

export { Header };
