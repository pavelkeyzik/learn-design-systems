import React from 'react';
import { H1, H2, H3, H4, H5, P } from '../../src/components/Typography';

export default {
  title: 'Design Tokens/Typography',
};

export function TypeScale() {
  return (
    <React.Fragment>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <P>Paragraph</P>
    </React.Fragment>
  );
}
