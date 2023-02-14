import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './carbon-slider';
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
  min,
  max,
  step
}) => {
  return html`<nintex-sample-carbon-slider 
  min=${min} 
  max=${max}
  step=${step} >
  </nintex-sample-carbon-slider>`;
};

export const Base: Story<SampleCarbonSlider> = Template.bind({});
Base.args = {
  min: '10',
  max: '500',
  step: '10'
};
