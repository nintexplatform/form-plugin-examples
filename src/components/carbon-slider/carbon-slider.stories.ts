import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { SampleCarbonSlider } from './carbon-slider';

export default {
  title: 'Carbon/Slider',
  component: 'nintex-sample-carbon-slider',
  parameters: {
    actions: {
      handles: ['nintex-value-change'],
    },
  },
} as Meta;

const Template: Story<SampleCarbonSlider> = ({
  title,
  min,
  max,
  step
}) => {
  return html`<nintex-sample-carbon-slider></nintex-sample-carbon-slider>`;
};

export const Base: Story<SampleCarbonSlider> = Template.bind({});
Base.args = {
  title: 'Example Slider',
};
