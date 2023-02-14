import  'carbon-web-components/es/components/slider/index.js';
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

  @property()
  readOnly: boolean = false;

  @property()
  value!: string;

  // Render the UI as a function of component state
  render() {
    return html`<bx-slider 
    ?disabled="${this.readOnly}"
    max="${this.max}" 
    min="${this.min}" 
    step="${this.step}" 
    .value="${this.value}"
    @change="${(e: any) => this.onChange(e)}">
    </bx-slider>`;
  }

  private onChange(e: any) {
    const value = e.target?.value;
    const args = {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: value,
    };
    const event = new CustomEvent('ntx-value-change', args);
    this.dispatchEvent(event);
  }

  static getMetaConfig(): Promise<PluginContract> | PluginContract {
    // plugin contract information
    return {
      controlName: 'Carbon Slider Component',
      fallbackDisableSubmit: false,
      iconUrl: 'one-line-text',
      version: '1',
      properties: {
        min: {
          type: 'integer',
          title: 'Min',
          defaultValue: 0,
        },
        max: {
            type: 'integer',
            title: 'Max',
            defaultValue: 100,
          },
        step: {
            type: 'integer',
            title: 'Step',
            defaultValue: 1,
          },
        value: {
          type: 'integer',
          title: 'Value',
          // this is to mark the field as value field. it should only be defined once in the list of properties
          isValueField: true,
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

}