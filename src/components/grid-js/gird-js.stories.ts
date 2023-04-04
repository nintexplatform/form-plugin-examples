import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';

import './grid-js';
import { NintexSampleGirdJs } from './grid-js';

export default {
  title: 'Grid JS',
  component: 'form-plugin-grid-js',
} as Meta;

const Template: Story<NintexSampleGirdJs> = ({ sortable, pagination }) => {
  return html`<form-plugin-grid-js
    ?sortable=${sortable}
    ?pagination=${pagination}
  >
  </form-plugin-grid-js>`;
};

export const Base: Story<NintexSampleGirdJs> = Template.bind({});
Base.args = {};
