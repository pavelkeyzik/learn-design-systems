import React, { useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '../theme';
import { UserIcon } from '../assets';

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
  const [isSrcBroken, setIsSrcBroken] = useState(false);

  function handleSrcError() {
    setIsSrcBroken(true);
  }

  if (!props.src || isSrcBroken) {
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
      <img {...props} onError={handleSrcError} />
    </AvatarBase>
  );
}

export { Avatar };
