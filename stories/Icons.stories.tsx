import React from 'react';
import {
  GitHubIcon,
  ImageIcon,
  MailIcon,
  TwitterIcon,
  UserIcon,
} from '../src/assets';

export default {
  title: 'Assets/Icons',
};

export function Default() {
  return (
    <div
      style={{
        display: 'grid',
        gap: 20,
      }}
    >
      <ImageIcon />
      <GitHubIcon />
      <MailIcon />
      <TwitterIcon />
      <UserIcon />
    </div>
  );
}
