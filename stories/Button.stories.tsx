import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps, ThemeProvider, extendTheme } from '../src';

const meta: Meta = {
  title: 'Control/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked', defaultValue: () => alert('Some action triggered!') },
    title: {
      control: {
        type: 'text',
      },
    },
    disabled: {
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

const Template: Story<ButtonProps> = (args) => {
const theme = extendTheme({
  default: {
    200: '#000000'
  }
})
return (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
)
}

export const Default = Template.bind({});
Default.args = {
  title: 'Storybook Button',
  disabled: false,
  onClick: () => alert('Some action triggered!')
};