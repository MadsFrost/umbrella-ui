import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Kbd, Flex } from '../src';

const meta: Meta = {
  title: 'Typography/Key',
  component: Kbd,
  argTypes: {
    key: {
        value: 'Shift',
        type: 'string'
    }
  }
};

export default meta;

const Template: Story = () => {
  return (
    <Flex center row>
        <Kbd>
            Shift
        </Kbd>
        <Kbd>
            Ctrl
        </Kbd>
        <Kbd>
            P
        </Kbd>
    </Flex>
  )

}

export const Default = Template.bind({});