import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from '../../app/components/Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const WithChildren = Template.bind({});
WithChildren.args = {
  children: <p>Some internal content</p>
};
WithChildren.argTypes = {
  header: {
    type: 'string'
  },
  body: {
    type: 'string'
  },
  footer: {
    type: 'string'
  },
}

export const WithSlots = Template.bind({});
WithSlots.args = {
  header: <h1>Header</h1>,
  body: <p>Body</p>,
  footer: <div>Footer</div>,
  headerProps: {
    className: 'background-primary-lighter',
  },
  bodyProps: {
    className: 'background-primary-lightest',
  },
  footerProps: {
    className: 'background-primary-lighter',
  },
};
