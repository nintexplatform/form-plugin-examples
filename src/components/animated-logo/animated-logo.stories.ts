import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';

import './animated-logo';
import { NintexSampleAnimatedLogo } from './animated-logo';

export default {
  title: 'lit-Logo',
  component: 'motion-lit',
} as Meta;

const Template: StoryFn<NintexSampleAnimatedLogo> = ({ word }) =>
  html` <form-plugin-animated-logo
    .word="${word}"
  ></form-plugin-animated-logo>`;

export const Base: StoryFn<NintexSampleAnimatedLogo> = Template.bind({});
Base.args = {
  word: 'Nintex',
};
