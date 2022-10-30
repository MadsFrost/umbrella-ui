import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Progress, ProgressProps } from '../src';

const meta: Meta = {
  title: 'Async/Progress',
  component: Progress,
  argTypes: {
    value: {
        defaultValue: 0,
        type: 'number'
    },
    classes: {
        defaultValue: undefined
    }
  }
};

export default meta;

const Template: Story<ProgressProps> = (args: ProgressProps) => {
  return <Progress {...args} />

}

export const Default = Template.bind({});