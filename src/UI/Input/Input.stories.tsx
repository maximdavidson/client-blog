import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Input, InputProps } from './index';

const meta: Meta<InputProps> = {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'textarea'],
    },
    placeholder: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj<InputProps>;

const Template: React.FC<InputProps> = (args) => {
  const { register } = useForm();
  return <Input {...args} register={register(args.name)} />;
};

export const TextInput: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'text',
    name: 'username',
    placeholder: 'Enter your username',
  },
};

export const EmailInput: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'email',
    name: 'email',
    placeholder: 'Enter your email',
  },
};

export const TextareaInput: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'textarea',
    name: 'description',
    placeholder: 'Enter your description',
  },
};

export const InputWithError: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'text',
    name: 'username',
    placeholder: 'Enter your username',
    error: 'This field is required',
  },
};
