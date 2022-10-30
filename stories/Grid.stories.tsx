import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid, GridProps, GridElement } from '../src';

const meta: Meta = {
  title: 'Layout/Grid',
  component: Grid
};

export default meta;

const Template: Story<GridProps> = (args: GridProps) => {
  return <Grid {...args}>
    <GridElement>
        <div className='w-full shadow-md p-2'>Element 1</div>
    </GridElement>
    <GridElement>
        <div className='w-full shadow-md p-2'>Element 2</div>
    </GridElement>
    <GridElement>
        <div className='w-full shadow-md p-2'>Element 3</div>
    </GridElement>
    <GridElement>
        <div className='w-full shadow-md p-2'>Element 4</div>
    </GridElement>
    <GridElement>
        <div className='w-full shadow-md p-2'>Element 5</div>
    </GridElement>
    <GridElement>
        <div className='w-full shadow-md p-2'>Element 6</div>
    </GridElement>
    <GridElement>
        <div className='w-full shadow-md p-2'>Element 7</div>
    </GridElement>
    <GridElement>
        <div className='w-full shadow-md p-2'>Element 8</div>
    </GridElement>
    <GridElement>
        <div className='w-full shadow-md p-2'>Element 9</div>
    </GridElement>
    <GridElement>
        <div className='w-full shadow-md p-2'>Element 10</div>
    </GridElement>
    <GridElement>
        <div className='w-full shadow-md p-2'>Element 11</div>
    </GridElement>
    <GridElement>
        <div className='w-full shadow-md p-2'>Element 12</div>
    </GridElement>
  </Grid>
}

export const Default = Template.bind({});
Default.args = {
    columns: 1
};