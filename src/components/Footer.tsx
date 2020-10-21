import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../theme';
import { centerContainerStyles } from '../theme/sizes';

const FooterContainer = styled.div`
  display: flex;
`;

const FooterCenter = styled.div`
  ${centerContainerStyles}
  display: flex;
  flex-direction: column;
`;

const FooterTopLine = styled.hr`
  display: block;
  height: 1px;
  background: ${theme.colors.neutral[300]};
  border: 0;
  width: 100%;
  margin: 0;
`;

const FooterContent = styled.footer`
  padding-top: ${theme.spacing[5]};
  padding-bottom: ${theme.spacing[5]};
  text-align: center;
`;

type FooterProps = {
  children?: React.ReactNode;
};

function Footer(props: FooterProps) {
  return (
    <FooterContainer>
      <FooterCenter>
        <FooterTopLine />
        <FooterContent>{props.children}</FooterContent>
      </FooterCenter>
    </FooterContainer>
  );
}

export { Footer };
