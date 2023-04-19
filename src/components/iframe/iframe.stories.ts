import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';

import './iframe';
import { NintexSampleIframe } from './iframe';

export default {
  title: 'IFrame',
  component: 'form-plugin-iframe',
} as Meta;

const Template: StoryFn<NintexSampleIframe> = ({ name, description, src, height }) => {
  return html`<form-plugin-iframe
    .name=${name}
    .description=${description}
    .src=${src}
    .height=${height}
  >
  </form-plugin-iframe>`;
};

export const Base: StoryFn<NintexSampleIframe> = Template.bind({});
Base.args = {
  src: 'https://www.wikipedia.org/',
  height: 500,
  name: 'Name',
  description: 'description',
};
