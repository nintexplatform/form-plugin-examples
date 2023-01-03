import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';

import './iframe';
import { ZwcIframe } from './iframe';

export default {
  title: 'IFrame',
  component: 'zwc-iframe',
} as Meta;

const Template: Story<ZwcIframe> = ({ name, description, src, height }) => {
  return html`<zwc-iframe
    .name=${name}
    .description=${description}
    .src=${src}
    .height=${height}
  >
  </zwc-iframe>`;
};

export const Base: Story<ZwcIframe> = Template.bind({});
Base.args = {
  src: 'https://www.wikipedia.org/',
  height: 500,
  name: 'Name',
  description: 'description',
};
