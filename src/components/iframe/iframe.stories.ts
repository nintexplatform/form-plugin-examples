import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import './iframe';
import { ZwcIframe } from './iframe';

export default {
  title: 'IFrame',
  component: 'zwc-iframe',
} as Meta;

const Template: Story<ZwcIframe> = ({ name, title, src, height }) => {
  console.log('name', name);

  return html`<zwc-iframe
    name="${ifDefined(name)},"
    title=${ifDefined(title)}
    src="${ifDefined(src)}"
    height=${ifDefined(height)}
  >
  </zwc-iframe>`;
};

export const Base: Story<ZwcIframe> = Template.bind({});
Base.args = {};
