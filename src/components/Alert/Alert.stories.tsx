import React from 'react';
import Alert from './Alert';
import { Link } from './Alert.types';
import { ComponentStory } from "@storybook/react";

export default {
  title: 'ComponentLibrary/Alert',
  component: Alert,
  argTypes: {
    style: {
      control: {
        type: 'select',
        options: ['error', 'info', 'success', 'warning'],
      },
      defaultValue: 'error',
    },
  },
  parameters: {
    jest: ['Alert.test.tsx'],
  },
};

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: 'Default alert heading',
};

export const Description = Template.bind({});

Description.args = {
  header: 'There are some errors',
  description: 'Please correct the errors on this form before continuing',
};

Description.argTypes = {
  description: {
    table: {
      disable: false,
    },
  },
};

const TemplateWithChildren: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}>
    <>
      Disruption on the network please go to{' '}
      <a href="http://tfl.gov.uk">for further information</a>
    </>
  </Alert>
);

export const DescriptionWithLink = TemplateWithChildren.bind({});
DescriptionWithLink.args = {
  header: 'Network disrupted',
};

const errorDataWithLinks: Link[] = [
  {
    link: 'https://tfl.gov.uk/line/jubilee',
    text: 'Severe delays on Jubilee line',
  },
  {
    link: 'https://tfl.gov.uk/line/central',
    text: 'Minor delays on Central line',
  },
  {
    link: 'https://tfl.gov.uk/line/circle',
    text: 'Severe delays on Circle line',
  },
];

export const DescriptionWithLinksOnly = Template.bind({});

DescriptionWithLinksOnly.args = {
  header: 'Network disrupted',
  summaryData: errorDataWithLinks,
};

DescriptionWithLinksOnly.argTypes = {
  summaryData: {
    table: {
      disable: false,
    },
  },
};
