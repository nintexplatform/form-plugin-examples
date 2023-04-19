import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';

import './chart-pie';
import { NintexSampleChartJs } from './chart-pie';

export default {
  title: 'Chart Pie',
  component: 'form-plugin-chart-js',
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    bindings: {
      options: ['chart1', 'chart2', 'chart3'],
      type: { name: 'string', required: false },
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const Template: StoryFn<NintexSampleChartJs> = ({ bindings }) => html`<form-plugin-chart-js
  style="max-width: 400px"
  .bindings=${bindings}
>
</form-plugin-chart-js>`;

export const Base: StoryFn<NintexSampleChartJs> = Template.bind({});
Base.args = {};
