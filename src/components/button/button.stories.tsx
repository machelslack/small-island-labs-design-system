import React from 'react';

import ButtonComponent from './button';

export default {
  component: ButtonComponent,
  title: 'Button',
};

const ButtonComponentTemplate = args => <ButtonComponent {...args} />;

export const Default = ButtonComponentTemplate.bind({});
Default.args = {};
