import React from 'react';
import { Footer } from '../src/components/Footer';

export default {
  title: 'Components/Footer',
};

export function Default() {
  return (
    <Footer>
      Made with love by{' '}
      <a href="https://twitter.com/pavelkeyzik">Pavel Keyzik</a>
    </Footer>
  );
}
