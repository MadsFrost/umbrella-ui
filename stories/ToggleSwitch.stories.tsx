import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ToggleSwitch, ToggleSwitchProps } from '../src';

const meta: Meta = {
  title: 'Input/Toggle Switch',
  component: ToggleSwitch,
  argTypes: {
    onChange: {},
    enabled: {
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

const Template: Story<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};