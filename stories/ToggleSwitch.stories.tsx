import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ToggleSwitch, ToggleSwitchProps } from '../src';

const meta: Meta = {
  title: 'Control/Toggle/Toggle Switch',
  component: ToggleSwitch,
  argTypes: {
    onChange: {},
    enabled: {
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

const Template: Story<ToggleSwitchProps> = (args) => {
  const [isEnabled, setEnabled] = React.useState(args.enabled);
  React.useEffect(() => {
    setEnabled(args.enabled);
  }, [args.enabled])

  return <ToggleSwitch onChange={(value) => setEnabled(value)} enabled={isEnabled} />

}

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};