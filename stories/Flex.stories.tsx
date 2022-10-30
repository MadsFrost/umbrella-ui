import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Flex, FlexProps } from '../src';

const meta: Meta = {
  title: 'Layout/Flex',
  component: Flex
};

export default meta;

const Template: Story<FlexProps> = (args: FlexProps) => {
  return <Flex className='shadow-md' {...args}>
    <div>Child 1</div>
    <div>Child 2</div>
    <div>Child 3</div>
  </Flex>
}

export const Default = Template.bind({});
Default.args = {}; 