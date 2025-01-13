import { StoryObj, Meta } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'Primary',
    size: 'Medium',
    disabled: false,
    children: 'Primary Button',
    className: 'user-defined-css-class',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'Secondary',
    size: 'Medium',
    disabled: false,
    children: 'Secondary Button',
    className: 'user-defined-css-class',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'Tertiary',
    size: 'Medium',
    disabled: false,
    children: 'Tertiary Button',
    className: 'user-defined-css-class',
  },
};
