import React from 'react';
import styled from '@emotion/styled';

function UserIcon() {
  return (
    <UserIconWrapper width="16" height="17" viewBox="0 0 16 17">
      <path
        d="M8 0.666504C10.2975 0.666504 12.1667 2.53567 12.1667 4.83317C12.1667 7.13067 10.2975 8.99984 8 8.99984C5.7025 8.99984 3.83333 7.13067 3.83333 4.83317C3.83333 2.53567 5.7025 0.666504 8 0.666504ZM8 7.33317C9.37833 7.33317 10.5 6.2115 10.5 4.83317C10.5 3.45484 9.37833 2.33317 8 2.33317C6.62167 2.33317 5.5 3.45484 5.5 4.83317C5.5 6.2115 6.62167 7.33317 8 7.33317ZM0.5 16.4998V15.6665C0.5 12.4507 3.1175 9.83317 6.33333 9.83317H9.66667C12.8833 9.83317 15.5 12.4507 15.5 15.6665V16.4998H13.8333V15.6665C13.8333 13.369 11.9642 11.4998 9.66667 11.4998H6.33333C4.03583 11.4998 2.16667 13.369 2.16667 15.6665V16.4998H0.5Z"
        fill="currentColor"
      />
    </UserIconWrapper>
  );
}

const UserIconWrapper = styled.svg`
  display: flex;
  align-items: center;
  vertical-align: middle;
  width: 100%;
  height: 100%;
`;

export { UserIcon };
