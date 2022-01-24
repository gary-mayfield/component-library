import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ComponentLibrary/Button",
  component: Button,
  argTypes:{
    label: {description: 'Button label text', control: 'text'},
    onClick: {action: 'onClick', table: {disable: true}},
    buttonStyle: {
      table: {
        disable: true,
      },
    }
  },
  parameters: {
    jest: ['Button.test.tsx'],
  }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default button',
  buttonStyle: 'light'
}

export const Light = Template.bind({});
Light.args = {
  label: 'Light',
  buttonStyle: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Dark',
  buttonStyle: 'dark',
};