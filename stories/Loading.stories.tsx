import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Loading, Grid } from '../src';

const meta: Meta = {
  title: 'Async/Loaders',
  component: Loading.Dna
};

export default meta;

const Mutating: Story = () => {
    const { MutatingDots } = Loading;
    return (
    <div className='w-[400px]'>
        <Grid columns={1}>
            <MutatingDots />
        </Grid>
    </div>
    )
}

const DNA: Story = () => {
    const { Dna } = Loading;
    return (
    <div className='w-[300px]'>
        <Grid columns={2}>
            <Dna />
        </Grid>
    </div>
    )
}

const LoadingGrid: Story = () => {
    const { Grid: LoadingGrid } = Loading;
    return (
    <div className='w-[300px]'>
        <Grid columns={2}>
            <LoadingGrid />
        </Grid>
    </div>
    )
}

const ThreeDots: Story = () => {
    const { ThreeDots } = Loading;
    return (
    <div className='w-[300px]'>
        <Grid columns={2}>
            <ThreeDots />
        </Grid>
    </div>
    )
}

const InfiniteSpin: Story = () => {
    const { InfinitySpin } = Loading;
    return (
    <div className='w-[300px]'>
        <Grid columns={2}>
            <InfinitySpin />
        </Grid>
    </div>
    )
}


export const MutatingDotsLoader = Mutating.bind({});
export const DNALoader = DNA.bind({});
export const GridLoader = LoadingGrid.bind({});
export const ThreeDotsLoader = ThreeDots.bind({});
export const InfiniteSpinLoader = InfiniteSpin.bind({});