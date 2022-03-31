import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FlashMessage from '../../app/components/FlashMessage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/FlashMessage',
  component: FlashMessage,
} as ComponentMeta<typeof FlashMessage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FlashMessage> = (args) => <FlashMessage {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'notice',
  message: 'This is a message',
};
