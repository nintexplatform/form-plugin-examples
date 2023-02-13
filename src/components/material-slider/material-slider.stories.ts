import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';

import './material-slider';
import { NintexSampleSlider } from './material-slider';

export default {
  title: 'Material/Slider',
  component: 'nintex-sample-slider',
  actions: {
    handles: ['nintex-value-change'],
  },
} as Meta;

const Template: Story<NintexSampleSlider> = ({
  title,
  disabled,
  min,
  max,
  value,
}) => html`<nintex-sample-slider
  .title=${title}
  ?disabled=${disabled}
  .min=${min}
  .max=${max}
  .value=${value}
>
</nintex-sample-slider>`;

export const Base: Story<NintexSampleSlider> = Template.bind({});
Base.args = {
  title: 'Example',
};
