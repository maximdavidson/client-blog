import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required('Full Name is required')
    .min(2, 'Full Name must be at least 2 characters'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  queryRelated: yup.string().required('Please select a query type'),
});

const meta: Meta<typeof Input> = {
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
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

const Template: Story = (args) => {
  const { control, register } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      queryRelated: '',
    },
  });

  return (
    <div>
      <Controller
        name={args.name as string}
        control={control}
        render={({ field }) => (
          <Input
            {...args}
            {...field}
            register={register(args.name as string)}
          />
        )}
      />
    </div>
  );
};

export const TextInput: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'text',
    name: 'fullName',
    placeholder: 'Enter your full name',
    error: '',
  },
};

export const EmailInput: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'email',
    name: 'email',
    placeholder: 'Enter your email',
    error: '',
  },
};

export const TextareaInput: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'textarea',
    name: 'queryRelated',
    placeholder: 'Enter your query',
    error: '',
  },
};

export const ErrorInput: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'text',
    name: 'fullName',
    placeholder: 'Enter your full name',
    error: 'This is a sample error message',
  },
};
