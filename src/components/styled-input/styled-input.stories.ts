import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';

import './styled-input';
import { NintexStyledInput } from './styled-input';

export default {
  title: 'Styled Input',
  component: 'nintex-styled-input',
  parameters: {
    actions: {
      handles: ['nintex-value-change'],
    },
  },
} as Meta;

const Template: Story<NintexStyledInput> = ({ value, readOnly }) => {
  return html` <nintex-styled-input
    .value="${value}"
    .readOnly="${readOnly}"
  ></nintex-styled-input>`;
};

export const Base: Story<NintexStyledInput> = Template.bind({});
Base.args = {
  value: 'my value',
};
