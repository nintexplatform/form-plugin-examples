import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  ActiveElement,
  ArcElement,
  Chart,
  ChartConfiguration,
  ChartEvent,
  Legend,
  PieController,
  Title,
  Tooltip,
} from 'chart.js';
import { styleMap } from 'lit/directives/style-map.js';
import { styles } from './chart-pie.styles';
import { fakeData } from './chart-pie.data';
import { PluginContract } from '@nintex/form-plugin-contract';
import { updatePluginValue } from '../../utils/events';

type bindingsTypes = 'chart1' | 'chart2' | 'chart3';

/**
 * @tag form-plugin-chart-js
 * @tagname form-plugin-chart-js
 *
 */
@customElement('form-plugin-chart-js')
export class NintexSampleChartJs extends LitElement {
  @property({ reflect: true })
  bindings: bindingsTypes = 'chart1';

  @property({ reflect: true })
  titleField!: string;

  @property({ type: Number })
  maxHeight!: number;

  private chart?: Chart;

  constructor() {
    super();
    Chart.register(ArcElement, PieController, Legend, Tooltip, Title);
  }

  static get styles() {
    return styles;
  }

  public static getMetaConfig(): Promise<PluginContract> {
    return import('./chart-pie.config').then(x => x.config);
  }

  updated() {
    const el = this.shadowRoot?.querySelector(
      '.chart-container'
    ) as HTMLCanvasElement;

    if (!el) {
      return;
    }

    if (this.chart) {
      this.chart.destroy();
    }

    const colors = ['#9DDA89', '#7558A2', '#FF8B47', '#17CDD6', '#D0D65A'];

    const bindingData = fakeData[this.bindings] || [];

    const data = {
      labels: bindingData.map(x => x.name),
      datasets: [
        {
          data: bindingData.map(x => x.value),
          backgroundColor: colors,
        },
      ],
    };

    const config: ChartConfiguration = {
      type: 'pie',
      data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 14,
                family: 'Open Sans',
              },
            },
          },
          title: {
            display: true,
            text: this.titleField || 'Pie Chart',
          },
        },
        onClick: (
          event: ChartEvent,
          elements: ActiveElement[],
          chart: Chart
        ) => {
          if (chart.data && chart.data.labels) {
            const label = chart.data?.labels[elements[0].index] as string;
            updatePluginValue<string>(this, { detail: label });
          }
        },
      },
    };

    this.chart = new Chart(el, config);
  }

  render() {
    const elementStyles = {
      maxHeight: this.maxHeight ? `${this.maxHeight}px` : '400px',
    };

    return html`
      <canvas
        id="myChart"
        class="chart-container"
        aria-label="Chart with Name"
        role="img"
        style=${styleMap(elementStyles)}
      ></canvas>
    `;
  }
}
