import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../theme';
import { UserIcon } from '../assets';
import { useIsImageBroken } from '../hooks/use-is-image-broken';

const AvatarBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  background-color: ${theme.colors.neutral[300]};
  color: ${theme.colors.neutral[400]};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Avatar(
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  const { isBroken, onSrcError } = useIsImageBroken();

  if (!props.src || isBroken) {
    return (
      <AvatarBase>
        <IconContainer>
          <UserIcon />
        </IconContainer>
      </AvatarBase>
    );
  }

  return (
    <AvatarBase>
      <img
        {...props}
        alt={props.alt || "User's avatar"}
        onError={props.onError || onSrcError}
      />
    </AvatarBase>
  );
}

export { Avatar };
