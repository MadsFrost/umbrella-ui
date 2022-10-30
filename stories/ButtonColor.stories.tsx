import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src';

const meta: Meta = {
  title: 'Control/Button/Colors',
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

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  onClick: () => alert('Some action triggered!'),
  variant: 'filled',
  color: 'primary',
  children: 'Primary'
};

export const Neutral = Template.bind({});
Neutral.args = {
  disabled: false,
  onClick: () => alert('Some action triggered!'),
  variant: 'filled',
  children: 'Neutral'
};

export const Success = Template.bind({});
Success.args = {
  disabled: false,
  onClick: () => alert('Some action triggered!'),
  variant: 'filled',
  color: 'success',
  children: 'Success'
};

export const Error = Template.bind({});
Error.args = {
  disabled: false,
  onClick: () => alert('Some action triggered!'),
  variant: 'filled',
  color: 'error',
  children: 'Error'
};

export const Warning = Template.bind({});
Warning.args = {
  disabled: false,
  onClick: () => alert('Some action triggered!'),
  variant: 'filled',
  color: 'warning',
  children: 'Warning'
};