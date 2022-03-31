import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../../app/components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const WithText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithText.args = {
  color: 'primary',
  children: 'Button',
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  color: 'secondary',
  children: (
    <>
      <h1 className='margin-right-sm'>Left</h1>
      <h5>Right</h5>
    </>
  )
};
