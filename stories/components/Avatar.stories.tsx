import React from 'react';
import { Avatar } from '../../src/components/Avatar';

export default {
  title: 'Components/Avatar',
};

export function AvatarWithoutSource() {
  return <Avatar />;
}

export function AvatarWithSource() {
  return <Avatar src="https://picsum.photos/seed/picsum/40/40" />;
}

export function AvatarWithBrokenSource() {
  return <Avatar src="https://piasdasdcsum.photos/seed/picsum/40/40" />;
}
