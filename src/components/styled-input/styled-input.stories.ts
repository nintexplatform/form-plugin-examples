import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';

import { StyledInput } from './styled-input';

export default {
  title: 'Styled Input',
  component: 'nintex-styled-input',
  parameters: {
    actions: {
      handles: ['ntx-value-change'],
    },
  },
} as Meta;

const Template: Story<StyledInput> = ({ value }) => {
  return html`<nintex-styled-input value="${value}"></nintex-styled-input>`;
};

export const Base: Story<StyledInput> = Template.bind({});
