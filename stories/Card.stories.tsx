import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, CardProps, Button } from '../src';

const meta: Meta = {
  title: 'Control/Card',
  component: Card
};

export default meta;

const Header = () => (
    <h1 className='text-lg text-white p-4 font-semibold bg-slate-600 rounded-tr-md rounded-tl-md'>Header</h1>
)

const Footer = () => (
    <div className='flex flex-row justify-between p-2 bg-slate-600 rounded-bl-md rounded-br-md'>
        <Button variant='text' className='!text-white' size='small'>Confirm</Button>
        <Button variant='text' className='!text-white' size='small'>Cancel</Button>
    </div>
)

const Template: Story<CardProps> = (args: CardProps) => {
  return <Card {...args}>
    The card component has a header child, a footer child and a children prop.
    
  </Card>
}

export const Default = Template.bind({});
Default.args = {
    header: <Header />, 
    actions: <Footer />,
    classes: {
        wrapperClass: 'text-black rounded-md shadow-md',
        contentClass: 'p-4'
    }
};