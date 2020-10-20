import React from 'react';
import { Header } from '../src/components/Header';

export default {
  title: 'Components/Header',
};

export function Default() {
  return (
    <Header>
      <Header.Item>
        <Header.Logo href="#">Pavel Keyzik</Header.Logo>
      </Header.Item>
      <Header.Item full />
      <Header.Menu>
        <Header.MenuItem href="#blog">Blog</Header.MenuItem>
        <Header.MenuItem href="#about">About</Header.MenuItem>
        <Header.MenuItem href="#latest-works">Latest works</Header.MenuItem>
      </Header.Menu>
    </Header>
  );
}
