import React from 'react';
import { Link } from '../../src/components/Link';
import { P } from '../../src/components/Typography';

export default {
  title: 'Components/Links',
};

export function Default() {
  return (
    <P>
      Text with <Link href="#">link</Link>
    </P>
  );
}
