import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';

import './material-textfield';
import { NintexSampleTextfield } from './material-textfield';

export default {
  title: 'Material/Textfield',
  component: 'nintex-sample-textfield',
  parameters: {
    actions: {
      handles: ['nintex-value-change'],
    },
  },
} as Meta;

const Template: Story<NintexSampleTextfield> = ({
  title,
  description,
  outlined,
  disabled,
}) => {
  return html`<nintex-sample-textfield
    .title=${title}
    .description=${description}
    ?outlined=${outlined}
    ?disabled=${disabled}
  >
  </nintex-sample-textfield>`;
};

export const Base: Story<NintexSampleTextfield> = Template.bind({});
Base.args = {
  title: 'Example',
  description: 'Description of field',
};
