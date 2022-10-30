import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src';

const meta: Meta = {
  title: 'Control/Button/Variants',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked', defaultValue: () => alert('Some action triggered!') },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => {
  return (
      <Button {...args}>
        {args.children}
      </Button>
  )
}

export const Filled = Template.bind({});
Filled.args = {
  disabled: false,
  onClick: () => alert('Some action triggered!'),
  variant: 'filled',
  color: 'primary',
  children: 'Filled'
};

export const Outlined = Template.bind({});
Outlined.args = {
  disabled: false,
  onClick: () => alert('Some action triggered!'),
  variant: 'outlined',
  color: 'primary',
  children: 'Outlined'
};

export const Text = Template.bind({});
Text.args = {
  disabled: false,
  onClick: () => alert('Some action triggered!'),
  variant: 'text',
  color: 'primary',
  children: 'Text'
};