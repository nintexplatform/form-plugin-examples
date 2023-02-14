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

  @property({ type: Boolean })
  readOnly: boolean = false;

  @property()
  selectedValue: string = '50';

  // Render the UI as a function of component state
  render() {
    return html`<bx-slider 
    label-text="Slider" 
    ?disabled="${this.readOnly}"
    max="${this.max}" 
    min="${this.min}" 
    step="${this.step}" 
    .value="${this.selectedValue}"
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
          type: 'number',
          title: 'min',
          defaultValue: 0,
        },
        max: {
            type: 'number',
            title: 'max',
            defaultValue: 100,
          },
        step: {
            type: 'number',
            title: 'step',
            defaultValue: 1,
          },
        selectedValue: {
          type: 'number',
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