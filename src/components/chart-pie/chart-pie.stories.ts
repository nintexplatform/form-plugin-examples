import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';

import './chart-pie';
import { NintexSampleChartJs } from './chart-pie';

export default {
  title: 'Chart Pie',
  component: 'nintex-sample-chart-js',
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

const Template: Story<NintexSampleChartJs> = ({ bindings }) => html`<nintex-sample-chart-js
  style="max-width: 400px"
  .bindings=${bindings}
>
</nintex-sample-chart-js>`;

export const Base: Story<NintexSampleChartJs> = Template.bind({});
Base.args = {};
