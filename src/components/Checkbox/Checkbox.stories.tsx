import { ComponentStory } from '@storybook/react';
import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'ComponentLibrary/Checkbox',
  component: Checkbox,
  args: {
    id: 'terms',
    label: 'Please accept terms and conditions',
    name: 'terms',
  },
  argTypes: {
    inputRef: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    jest: ['Checkbox.test.tsx'],
  },
};

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    checkboxStyle: 'light'
}
Default.argTypes = {
    checkboxStyle: {
        control: {
            type: 'select',
            options: [
                'light',
                'dark'
            ],
        },
        table: {
            disable: false,
        },
    },
};

export const Validation = Template.bind({});
Validation.args = {
  errorMessage: 'You must accept terms and conditions to proceed',
  showError: true,
};

export const CheckedDisabled = Template.bind({});

CheckedDisabled.args = {
  checked: true,
  disabled: true,
};

export const UncheckedDisabled = Template.bind({});
UncheckedDisabled.args = {
  disabled: true,
};
