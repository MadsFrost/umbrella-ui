import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Typography, TypographyProps } from '../src/Typography';

const meta: Meta = {
  title: 'Typography/Text',
  component: Typography
};

export default meta;

const Template: Story<TypographyProps> = (args: TypographyProps) => {
  return <Typography {...args}>Whereas recognition of the inherent dignity</Typography>
}

const TemplateAll: Story<TypographyProps> = (args: TypographyProps) => {
    return (
        <div className='flex flex-col'>
            <Typography className='pb-2' variant={'h1'} {...args}>Whereas recognition of the inherent dignity</Typography>
            <Typography className='pb-2' variant={'h2'} {...args}>Whereas recognition of the inherent dignity</Typography>
            <Typography className='pb-2' variant={'h3'} {...args}>Whereas recognition of the inherent dignity</Typography>
            <Typography className='pb-2' variant={'h4'} {...args}>Whereas recognition of the inherent dignity</Typography>
            <Typography className='pb-2' variant={'body'} {...args}>Whereas recognition of the inherent dignity</Typography>
            <Typography className='pb-2' variant={'body-small'} {...args}>Whereas recognition of the inherent dignity</Typography>
            <Typography className='pb-2' variant={'label'} {...args}>Whereas recognition of the inherent dignity</Typography>
            <Typography className='pb-2' variant={'label-small'} {...args}>Whereas recognition of the inherent dignity</Typography>
            <Typography className='pb-2' variant={'label-tiny'} {...args}>Whereas recognition of the inherent dignity</Typography>
            <Typography className='pb-2' variant={'paragraph'} {...args}>Whereas recognition of the inherent dignity</Typography>
        </div>
    )
  }

export const Default = Template.bind({});
Default.args = {};

export const Variants = TemplateAll.bind({});
Variants.arg = {};