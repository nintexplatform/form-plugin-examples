import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';

import { NintexStyledInput } from './nintex-styled-input';

export default {
  title: 'Styled Input',
  component: 'nintex-styled-input',
  parameters: {
    actions: {
      handles: ['ntx-value-change'],
    },
  },
} as Meta;

const Template: Story<NintexStyledInput> = ({ value }) => {
  return html`<nintex-styled-input value="${value}"></nintex-styled-input>`;
};

export const Base: Story<NintexStyledInput> = Template.bind({});
