import React from 'react';
import { H1, P } from '../../src/components/Typography';
import { PrimaryButton } from '../../src/components/Buttons';
import { theme } from '../../src/theme';

export default {
  title: 'Examples/SiteHeader',
};

export function Default() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: 400,
        background: theme.colors.neutral[100],
      }}
    >
      <H1 mb={3}>Software Engineering is here</H1>
      <P>Hope you’ll find something interesting below</P>
      <PrimaryButton mt={5}>Scroll to see my works</PrimaryButton>
    </div>
  );
}
