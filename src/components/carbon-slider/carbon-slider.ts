import 'carbon-web-components/es/components/slider/index.js';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { PluginContract } from '@nintex/form-plugin-contract';
import { styles } from './carbon-slider.styles';


@customElement('nintex-sample-carbon-slider')
export class SampleCarbonSlider extends LitElement {
  static styles = styles;

  @property()
  min!: string;
  @property()
  max!: string;
  @property()
  step!: string;

  static getMetaConfig(): Promise<PluginContract> | PluginContract {
    // plugin contract information
    return {
      controlName: 'Carbon Slider Component',
      fallbackDisableSubmit: false,
      iconUrl: 'one-line-text',
      version: '1',
      properties: {
        min: {
          type: 'string',
          title: 'min',
          defaultValue: 0,
        },
        max: {
            type: 'string',
            title: 'min',
            defaultValue: 100,
          },
        step: {
            type: 'string',
            title: 'step',
            defaultValue: 1,
          },
        value: {
          type: 'string',
          title: 'Value',
          // this is to mark the field as value field. it should only be defined once in the list of properties
          isValueField: true,
          defaultValue: '20',
        },
      },
      standardProperties: {
        fieldLabel: true,
        description: true,
        defaultValue: true,
        readOnly: true,
      },
    };
  }

  // Render the UI as a function of component state
  render() {
    return html`<bx-slider style=${styleMap(styles)} label-text="Slider" max="100" min="0" step="1" value="50"></bx-slider>`;
  }

}