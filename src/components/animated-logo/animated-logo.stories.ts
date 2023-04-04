import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';

import './animated-logo';
import { NintexSampleAnimatedLogo } from './animated-logo';

export default {
  title: 'lit-Logo',
  component: 'motion-lit',
} as Meta;

const Template: Story<NintexSampleAnimatedLogo> = ({ word }) =>
  html` <form-plugin-animated-logo
    .word="${word}"
  ></form-plugin-animated-logo>`;

export const Base: Story<NintexSampleAnimatedLogo> = Template.bind({});
Base.args = {
  word: 'Nintex',
};
