import { Meta, StoryObj } from '@storybook/react';
import Button from './index';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Large: StoryObj<typeof Button> = {
  args: {
    size: 'large',
    variant: 'primary',
    children: 'Large Button',
  },
};

export const Small: StoryObj<typeof Button> = {
  args: {
    size: 'small',
    variant: 'primary',
    children: 'Small Button',
  },
};

export const WithoutPadding: StoryObj<typeof Button> = {
  args: {
    size: 'without',
    variant: 'secondary',
    children: 'Button without Padding',
  },
};
