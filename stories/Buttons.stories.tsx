import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { PrimaryButton, SecondaryButton } from '../src';

export default {
  title: 'Components/Buttons',
};

export function Primary() {
  return (
    <PrimaryButton
      onClick={action('onClick')}
      disabled={boolean('disabled', false)}
    >
      {text('children', 'Button Default')}
    </PrimaryButton>
  );
}

export function Secondary(props) {
  return (
    <SecondaryButton
      onClick={action('onClick')}
      disabled={boolean('disabled', false)}
      {...props}
    >
      {text('children', 'Button Secondary')}
    </SecondaryButton>
  );
}
