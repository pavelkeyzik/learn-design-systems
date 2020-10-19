import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { PrimaryButton, SecondaryButton, TertiaryButton } from '../src';

export default {
  title: 'Components/Buttons',
};

export function Primary() {
  return (
    <PrimaryButton
      onClick={action('onClick')}
      disabled={boolean('disabled', false)}
    >
      {text('children', 'Button')}
    </PrimaryButton>
  );
}

export function Secondary() {
  return (
    <SecondaryButton
      onClick={action('onClick')}
      disabled={boolean('disabled', false)}
    >
      {text('children', 'Button')}
    </SecondaryButton>
  );
}

export function Tertiary() {
  return (
    <TertiaryButton
      onClick={action('onClick')}
      disabled={boolean('disabled', false)}
    >
      {text('children', 'Button')}
    </TertiaryButton>
  );
}
