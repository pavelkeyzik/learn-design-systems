import React from 'react';
import { GitHubIcon, MailIcon, TwitterIcon } from '../src/assets';
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
      <Header.Item>
        <Header.SocialMedia>
          <Header.SocialMediaItem
            href="https://github.com/pavelkeyzik"
            target="_blank"
          >
            <GitHubIcon />
          </Header.SocialMediaItem>
          <Header.SocialMediaItem
            href="https://twitter.com/pavelkeyzik"
            target="_blank"
          >
            <TwitterIcon />
          </Header.SocialMediaItem>
          <Header.SocialMediaItem href="mailto:pavel.keyzik@gmail.com">
            <MailIcon />
          </Header.SocialMediaItem>
        </Header.SocialMedia>
      </Header.Item>
    </Header>
  );
}
