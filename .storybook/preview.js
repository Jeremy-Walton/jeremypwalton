export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import React from 'react';
import rolemodelDesignSystemStyles from '@rolemodel/rolemodel-design-system/dist/css/rolemodel-design-system.css';

export const decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      <link rel="stylesheet" href={rolemodelDesignSystemStyles} />
      <Story />
    </div>
  ),
];
