import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from '../src';

const meta: Meta = {
  title: 'Control/Input',
  component: Input,
  argTypes: {
    placeholder: {
        defaultValue: 'Placeholder',
        type: 'string'
    },
    disabled: {
        defaultValue: 'false',
        type: 'boolean'
    }
  }
};

export default meta;

const Template: Story<InputProps> = (args: InputProps) => {
  return <Input {...args} />

}

export const Default = Template.bind({});
Default.args = {
    disabled: false
};