import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps, Icon } from '../src';
const meta: Meta = {
  title: 'Control/Button/Icons',
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

export const IconLeft = Template.bind({});
IconLeft.args = {
  disabled: false,
  onClick: () => alert('Some action triggered!'),
  variant: 'filled',
  color: 'primary',
  children: 'Icon Left',
  iconLeft: <Icon viewBox='0 0 50 50'><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></Icon>
};

export const IconRight = Template.bind({});
IconRight.args = {
  disabled: false,
  onClick: () => alert('Some action triggered!'),
  variant: 'filled',
  color: 'primary',
  children: 'Icon Right',
  iconRight: <Icon viewBox='0 0 50 50'><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></Icon>
};