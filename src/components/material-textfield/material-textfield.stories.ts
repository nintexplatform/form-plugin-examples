import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';

import './material-textfield';
import { NintexSampleTextfield } from './material-textfield';

export default {
  title: 'Material/Textfield',
  component: 'form-plugin-textfield',
  parameters: {
    actions: {
      handles: ['nintex-value-change'],
    },
  },
} as Meta;

const Template: StoryFn<NintexSampleTextfield> = ({
  title,
  description,
  outlined,
  readOnly,
}) => {
  return html`<form-plugin-textfield
    .title=${title}
    .description=${description}
    ?outlined=${outlined}
    ?readOnly=${readOnly}
  >
  </form-plugin-textfield>`;
};

export const Base: StoryFn<NintexSampleTextfield> = Template.bind({});
Base.args = {
  title: 'Example',
  description: 'Description of field',
};
