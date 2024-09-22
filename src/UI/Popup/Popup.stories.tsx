import { StoryObj, Meta } from '@storybook/react';
import { Popup } from './index';

const meta: Meta<typeof Popup> = {
  title: 'Example/Popup',
  component: Popup,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
export default meta;

type Story = StoryObj<typeof Popup>;

export const Default: Story = {
  args: {
    message: 'This is a popup message',
    backgroundColor: '#ffd050',
    onClose: () => alert('Popup closed'),
  },
};
