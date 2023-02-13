import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@material/mwc-slider/slider.js';
import { PluginContract } from '@nintex/form-plugin-contract';
import { updatePluginValue } from '../../utils/events';

@customElement('nintex-sample-slider')
export class NintexSampleSlider extends LitElement {
  static styles = css`
    :host {
      /* height: 100%; */
      width: 100%;
      display: block;

      --mdc-theme-primary: var(--ntx-form-theme-color-highlight, #f56900);
    }
  `;

  @property()
  titleField!: string;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Number })
  min = 0;

  @property({ type: Number })
  max = 100;

  @property({ type: Number, reflect: true })
  value = 0;

  public static getMetaConfig(): Promise<PluginContract> {
    return import('./material-slider.config').then(x => x.config);
  }

  render() {
    const min = this.min || 0;
    const max = this.max || 100;
    let value = this.value || this.min || 0;

    if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }

    return html`<label for="slider1">${this.titleField}</label>
      <mwc-slider
        id="slider1"
        .min=${min}
        .max=${max}
        .value=${value}
        ?disabled=${this.disabled}
        discrete
        @change=${(e: CustomEvent<{ value: number }>) => {
          this.value = e.detail.value;
          updatePluginValue<number>(this, { detail: e.detail.value });
        }}
      ></mwc-slider> `;
  }
}
