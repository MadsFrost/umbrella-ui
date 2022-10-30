import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SkeletonTheme, Skeleton, SkeletonProps } from '../src';

const meta: Meta = {
  title: 'Async/Skeleton',
  component: Skeleton
};

export default meta;

const Template: Story<SkeletonProps> = (args: SkeletonProps) => {
    return (
        <SkeletonTheme>
            <Skeleton {...args} />
        </SkeletonTheme>
    )
}


export const Default = Template.bind({});