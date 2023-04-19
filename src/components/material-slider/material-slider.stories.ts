import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';

import './material-slider';
import { NintexSampleSlider } from './material-slider';

export default {
  title: 'Material/Slider',
  component: 'form-plugin-slider',
  actions: {
    handles: ['nintex-value-change'],
  },
} as Meta;

const Template: StoryFn<NintexSampleSlider> = ({
  title,
  disabled,
  min,
  max,
  value,
}) => html`<form-plugin-slider
  .title=${title}
  ?disabled=${disabled}
  .min=${min}
  .max=${max}
  .value=${value}
>
</form-plugin-slider>`;

export const Base: StoryFn<NintexSampleSlider> = Template.bind({});
Base.args = {
  title: 'Example',
};
