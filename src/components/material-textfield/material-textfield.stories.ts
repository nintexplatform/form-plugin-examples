import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';

import './material-textfield';
import { ZwcTextfield } from './material-textfield';

export default {
  title: 'Material/Textfield',
  component: 'zwc-textfield',
  parameters: {
    actions: {
      handles: ['nintex-value-change'],
    },
  },
} as Meta;

const Template: Story<ZwcTextfield> = ({
  title,
  description,
  outlined,
  disabled,
}) => {
  return html`<zwc-textfield
    .title=${title}
    .description=${description}
    ?outlined=${outlined}
    ?disabled=${disabled}
  >
  </zwc-textfield>`;
};

export const Base: Story<ZwcTextfield> = Template.bind({});
Base.args = {
  title: 'Example',
  description: 'Description of field',
};
