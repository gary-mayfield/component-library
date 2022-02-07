import React from 'react';
import Tile from './Tile';
import { ComponentStory } from "@storybook/react";

export default {
  title: 'ComponentLibrary/Tile',
  component: Tile,
  parameters: {
    jest: ['Tile.test.tsx'],
  },
};

const Template: ComponentStory<typeof Tile> = (args) => <Tile {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: 'Pay to drive',
  description: 'Congestion charge, LEZ, ULEZ',
  tileStyle: 'light',
  href: '',
};

Default.argTypes = {
  tileStyle: {
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
